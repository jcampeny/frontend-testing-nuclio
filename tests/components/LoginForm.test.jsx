import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import {MemoryRouter, useNavigate} from 'react-router-dom';
import LoginForm from '../../src/components/LoginForm';
import {useLogin} from '../../src/hooks/useLogin';

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: vi.fn(() => vi.fn()),
    };
});

vi.mock('../../src/hooks/useLogin', () => ({
    useLogin: vi.fn(() => ({
        login: vi.fn(),
        error: null,
        loading: false,
    })),
}));

describe('LoginForm Component', () => {
    it('se renderiza correctamente', () => {
        render(
            <MemoryRouter>
                <LoginForm/>
            </MemoryRouter>
        );

        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Contraseña/i)).toBeInTheDocument();
        expect(screen.getByText(/Iniciar sesión/i)).toBeInTheDocument();
    });

    it('redirige al perfil tras un login exitoso', async () => {
        const mockNavigate = vi.fn();
        const loginMock = vi.fn(() => Promise.resolve({}));

        useNavigate.mockReturnValueOnce(mockNavigate);
        useLogin.mockReturnValueOnce({
            login: loginMock,
            error: null,
            loading: false,
        });

        render(
            <MemoryRouter>
                <LoginForm/>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText(/Email/i), {target: {value: 'john@example.com'}});
        fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), {target: {value: 'password123'}});

        fireEvent.click(screen.getByText(/Iniciar sesión/i));

        await waitFor(() => {
            expect(loginMock).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith('/profile');
        });
    });

    it('muestra un error si el login falla', async () => {
        const loginMock = vi.fn(() => undefined);
        const mockNavigate = vi.fn();

        useNavigate.mockReturnValueOnce(mockNavigate);
        useLogin.mockImplementationOnce(() => ({
            login: loginMock,
            error: 'Error al iniciar sesión',
            loading: false,
        }));

        render(
            <MemoryRouter>
                <LoginForm/>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText(/Email/i), {target: {value: 'john@example.com'}});
        fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), {target: {value: 'password123'}});

        fireEvent.click(screen.getByRole('button'));

        await waitFor(() => {
            expect(screen.getByText(/Error al iniciar sesión/i)).toBeInTheDocument();
            expect(loginMock).toHaveBeenCalled();
            expect(mockNavigate).not.toHaveBeenCalled();
        });
    });
});
