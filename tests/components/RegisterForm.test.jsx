import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import RegisterForm from '../../src/components/RegisterForm';
import {useRegister} from '../../src/hooks/useRegister';

vi.mock('../../src/hooks/useRegister', () => ({
    useRegister: vi.fn(() => ({
        register: vi.fn(),
        error: null,
        loading: false,
    })),
}));

describe('RegisterForm Component', () => {
    it('se renderiza correctamente', () => {
        render(<RegisterForm/>);

        expect(screen.getByPlaceholderText(/Nombre/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Contraseña/i)).toBeInTheDocument();
        expect(screen.getByText(/Registrar/i)).toBeInTheDocument();
    });

    it('redirige al perfil tras un registro exitoso', async () => {
        // TODO 02
    });

    it('muestra un error si el registro falla', async () => {
        const registerMock = vi.fn(() => undefined);

        useRegister.mockImplementationOnce(() => ({
            register: registerMock,
            error: 'Error al registrar',
            loading: false,
        }));

        render(<RegisterForm/>);

        // Simular llenar el formulario
        fireEvent.change(screen.getByPlaceholderText(/Nombre/i), {target: {value: 'John'}});
        fireEvent.change(screen.getByPlaceholderText(/Email/i), {target: {value: 'john@example.com'}});
        fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), {target: {value: 'password123'}});

        // Simular enviar el formulario
        fireEvent.click(screen.getByRole('button'));

        await waitFor(() => {
            expect(screen.getByText(/Error al registrar/i)).toBeInTheDocument();
            expect(registerMock).toHaveBeenCalled();
        });
    });
});
