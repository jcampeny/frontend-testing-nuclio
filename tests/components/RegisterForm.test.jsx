import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import {MemoryRouter, useNavigate} from 'react-router-dom';
import RegisterForm from '../../src/components/RegisterForm';
import {useRegister} from '../../src/hooks/useRegister';

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: vi.fn(() => vi.fn()),
    };
});

vi.mock('../../src/hooks/useRegister', () => ({
    useRegister: vi.fn(() => ({
        register: vi.fn(),
        error: null,
        loading: false,
    })),
}));

describe('RegisterForm Component', () => {
    it('se renderiza correctamente', () => {
        render(
            <MemoryRouter>
                <RegisterForm/>
            </MemoryRouter>
        );

        expect(screen.getByPlaceholderText(/Nombre/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Contraseña/i)).toBeInTheDocument();
        expect(screen.getByText(/Registrar/i)).toBeInTheDocument();
    });

    it('redirige al perfil tras un registro exitoso', async () => {
        const mockNavigate = vi.fn();
        const registerMock = vi.fn(() => Promise.resolve({}));

        useNavigate.mockReturnValueOnce(mockNavigate);
        useRegister.mockReturnValueOnce({
            register: registerMock,
            error: null,
            loading: false,
        });

        render(
            <MemoryRouter>
                <RegisterForm/>
            </MemoryRouter>
        );

        // Simular llenar el formulario
        fireEvent.change(screen.getByPlaceholderText(/Nombre/i), {target: {value: 'John'}});
        fireEvent.change(screen.getByPlaceholderText(/Email/i), {target: {value: 'john@example.com'}});
        fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), {target: {value: 'password123'}});

        // Simular enviar el formulario
        fireEvent.click(screen.getByText(/Registrar/i));

        await waitFor(() => {
            expect(registerMock).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith('/profile');
        });
    });

    it('muestra un error si el registro falla', async () => {
        const registerMock = vi.fn(() => undefined);
        const mockNavigate = vi.fn();

        useNavigate.mockReturnValueOnce(mockNavigate);
        useRegister.mockImplementationOnce(() => ({
            register: registerMock,
            error: 'Error al registrar',
            loading: false,
        }));

        render(
            <MemoryRouter>
                <RegisterForm/>
            </MemoryRouter>
        );

        // Simular llenar el formulario
        fireEvent.change(screen.getByPlaceholderText(/Nombre/i), {target: {value: 'John'}});
        fireEvent.change(screen.getByPlaceholderText(/Email/i), {target: {value: 'john@example.com'}});
        fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), {target: {value: 'password123'}});

        // Simular enviar el formulario
        fireEvent.click(screen.getByRole('button'));

        await waitFor(() => {
            expect(screen.getByText(/Error al registrar/i)).toBeInTheDocument();
            expect(registerMock).toHaveBeenCalled();
            expect(mockNavigate).not.toHaveBeenCalled();
        });
    });
});
