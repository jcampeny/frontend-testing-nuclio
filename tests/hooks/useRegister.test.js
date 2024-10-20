import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useRegister } from '../../src/hooks/useRegister';
import axios from 'axios';

vi.mock('axios');

describe('useRegister Hook', () => {
    it('registra al usuario correctamente', async () => {
        const mockData = { message: 'Usuario registrado' };
        axios.post.mockResolvedValueOnce({ data: mockData });

        const { result } = renderHook(() => useRegister());

        await act(async () => {
            await result.current.register({ email: 'test@test.com', password: 'password123' });
        });

        expect(axios.post).toHaveBeenCalledWith('/api/users/register', {
            email: 'test@test.com',
            password: 'password123',
        });
        expect(result.current.error).toBe(null);
        expect(result.current.loading).toBe(false);
    });

    it('muestra un error si el registro falla', async () => {
        axios.post.mockRejectedValueOnce(new Error('Error al registrar'));

        const { result } = renderHook(() => useRegister());

        await act(async () => {
            await result.current.register({ email: 'test@test.com', password: 'password123' });
        });

        expect(result.current.error).toContain('Error');
        expect(result.current.loading).toBe(false);
    });
});
