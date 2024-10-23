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

// npm run test tests/components/RegisterForm.test.jsx
describe('RegisterForm Component', () => {

    // npm run test tests/components/RegisterForm.test.jsx -- --testNamePattern="se renderiza correctamente"
    it('se renderiza correctamente', () => {
        // TODO 01
        // Step 1: Utiliza la función render de testing-library para renderizar el componente RegisterForm

        // Step 2: Utiliza las funciones de screen (getByPlaceholderText o getByText)  para buscar los elementos del formulario
        // y comprobar que estan en el documento .toBeInTheDocument();
    });

    // npm run test tests/components/RegisterForm.test.jsx -- --testNamePattern="muestra un error si el registro falla"
    it('muestra un error si el registro falla', async () => {
        // TODO 04

        // Step 1: Hacemos un mock del hook useRegister

        // Step 2: Renderizamos el componente RegisterForm

        // Step 3: Simular llenar el formulario

        // Step 4: Simulamos que mandamos el formulario

        await waitFor(() => {
            // Step 5: Comprobar que se muestra el mensaje de error
            // Step 6: Comprobar que se llama a la función register retornada por el Hook useRegister
        });
    });
});
