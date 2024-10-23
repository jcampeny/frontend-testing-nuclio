import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import LoginForm from '../../src/components/LoginForm';
import {useLogin} from '../../src/hooks/useLogin';

vi.mock('../../src/hooks/useLogin', () => ({
    useLogin: vi.fn(() => ({
        login: vi.fn(),
        error: null,
        loading: false,
    })),
}));

describe('LoginForm Component', () => {
    it('se renderiza correctamente', () => {
        render(<LoginForm/>);

        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Contraseña/i)).toBeInTheDocument();
        expect(screen.getByText(/Iniciar sesión/i)).toBeInTheDocument();
    });

    it('redirige al perfil tras un login exitoso', async () => {
        // TODO 03
    });

    it('muestra un error si el login falla', async () => {
        const loginMock = vi.fn(() => undefined);

        useLogin.mockImplementationOnce(() => ({
            login: loginMock,
            error: 'Error al iniciar sesión',
            loading: false,
        }));

        render(<LoginForm/>);

        fireEvent.change(screen.getByPlaceholderText(/Email/i), {target: {value: 'john@example.com'}});
        fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), {target: {value: 'password123'}});

        fireEvent.click(screen.getByRole('button'));

        await waitFor(() => {
            expect(screen.getByText(/Error al iniciar sesión/i)).toBeInTheDocument();
            expect(loginMock).toHaveBeenCalled();
        });
    });
});
