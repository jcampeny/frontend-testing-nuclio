import {renderHook, act} from '@testing-library/react';
import {describe, it, expect, vi, afterEach} from 'vitest';
import {useProfile} from '../../src/hooks/useProfile';
import axios from 'axios';

vi.mock('axios');

describe('useProfile Hook', () => {
    it('obtiene el perfil correctamente', async () => {
        const mockData = {firstName: 'John', lastName: 'Doe'};
        axios.get.mockResolvedValueOnce({data: {user: mockData}});

        const {result} = renderHook(() => useProfile());

        await act(async () => {
            await result.current.getProfile();
        });

        expect(axios.get).toHaveBeenCalledWith('/api/users/me', {withCredentials: true});
        expect(result.current.profile).toEqual(mockData);
        expect(result.current.error).toBe(null);
        expect(result.current.loading).toBe(false);
    });

    it('muestra un error si la obtención del perfil falla', async () => {
        axios.get.mockRejectedValueOnce(new Error('Error al obtener perfil'));

        const {result} = renderHook(() => useProfile());

        await act(async () => {
            await result.current.getProfile();
        });

        expect(result.current.error).toBe('Error al obtener perfil');
        expect(result.current.loading).toBe(false);
    });

    it('sube la imagen de perfil correctamente', async () => {
        const mockData = {profileImage: 'imagen_base64'};
        axios.post.mockResolvedValueOnce({data: mockData});

        const {result} = renderHook(() => useProfile());

        await act(async () => {
            await result.current.uploadImage('imagen_base64');
        });

        expect(axios.post).toHaveBeenCalledWith('/api/users/upload', {imageBase64: mockData.profileImage});
        expect(result.current.error).toBe(null);
    });
});
