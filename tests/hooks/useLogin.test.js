import {renderHook, act} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import {useLogin} from '../../src/hooks/useLogin';
import axios from 'axios';

vi.mock('axios');

describe('useLogin Hook', () => {
    it('logea al usuario correctamente', async () => {
        const mockData = {message: 'Inicio de sesión exitoso'};
        axios.post.mockResolvedValueOnce({data: mockData});

        const {result} = renderHook(() => useLogin());

        await act(async () => {
            await result.current.login({email: 'test@test.com', password: 'password123'});
        });

        expect(axios.post).toHaveBeenCalledWith('/api/users/login',
            {
                email: 'test@test.com',
                password: 'password123',
            },
            {withCredentials: true});
        expect(result.current.error).toBe(null);
        expect(result.current.loading).toBe(false);
    });

    it('muestra un error si el login falla', async () => {
        axios.post.mockRejectedValueOnce(new Error('Error al iniciar sesión'));

        const {result} = renderHook(() => useLogin());

        await act(async () => {
            await result.current.login({email: 'test@test.com', password: 'password123'});
        });

        expect(result.current.error).toContain('Error');
        expect(result.current.loading).toBe(false);
    });
});
