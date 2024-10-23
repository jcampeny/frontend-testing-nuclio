import {renderHook, act} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import {useLogin} from '../../src/hooks/useLogin';
import axios from 'axios';

vi.mock('axios');

describe('useLogin Hook', () => {
    // npm run test tests/hooks/useLogin.test.js -- --testNamePattern="logea al usuario correctamente"
    it('logea al usuario correctamente', async () => {
        // TODO 05

        // Step 2: Hacer un mock de la función post de axios con mockResolvedValueOnce

        // Step 3: Renderizar el hook useLogin

        await act(async () => {
            // Step 4: Llamar a la función login del hook useLogin con los datos de prueba
            // await result.current.login( ... )
        });

        // Step 5: Comprobar que se llama a la función post de axios con los datos de prueba
        // Step 6: Comprobar que el result.current.error es null
        // Step 7: Comprobar que el result.current.loading es false
    });

    it('muestra un error si el login falla', async () => {
        // TODO 06

        // No more help here!

        // Asserts ...
        // Comprobar que el result.current.error contiene Error
        // Comprobar que el result.current.loading es false
    });
});
