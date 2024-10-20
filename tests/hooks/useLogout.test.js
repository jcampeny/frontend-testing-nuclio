import {renderHook, act} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import {useLogout} from '../../src/hooks/useLogout';
import axios from 'axios';

vi.mock('axios');

describe('useLogout Hook', () => {
    it('cierra la sesión correctamente', async () => {
        axios.post.mockResolvedValueOnce({message: 'Sesión cerrada exitosamente'});

        const {result} = renderHook(() => useLogout());

        await act(async () => {
            await result.current.logout();
        });

        expect(axios.post).toHaveBeenCalledWith('/api/users/logout');
    });
});
