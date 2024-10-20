import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import {MemoryRouter, useNavigate} from 'react-router-dom';
import ProfilePage from '../../src/components/ProfilePage';
import {useProfile} from '../../src/hooks/useProfile';
import {useLogout} from '../../src/hooks/useLogout';

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: vi.fn(() => vi.fn()),
    };
});

const mockProfileData = {
    profile: { firstName: 'John', lastName: 'Doe', profileImage: 'image.jpg' },
    loading: false,
    error: null,
    uploadImage: vi.fn(),
    getProfile: vi.fn(),
};

vi.mock('../../src/hooks/useProfile', () => ({
    useProfile: vi.fn(() => mockProfileData),
}));

vi.mock('../../src/hooks/useLogout', () => ({
    useLogout: vi.fn(() => ({
        logout: vi.fn(),
    })),
}));

describe('ProfilePage Component', () => {
    it('se renderiza correctamente con los datos del perfil', () => {
        render(
            <MemoryRouter>
                <ProfilePage />
            </MemoryRouter>
        );

        expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
        expect(screen.getByAltText('Profile')).toHaveAttribute('src', 'image.jpg');
    });

    it('sube una imagen de perfil correctamente', async () => {
        const mockUploadImage = vi.fn();
        useProfile.mockReturnValueOnce({
            ...mockProfileData,
            uploadImage: mockUploadImage,
        });

        render(
            <MemoryRouter>
                <ProfilePage />
            </MemoryRouter>
        );

        const file = new File(['image'], 'image.png', { type: 'image/png' });
        const input = screen.getByLabelText(/Subir imagen/i); // Supongo que el input tiene un label
        fireEvent.change(input, { target: { files: [file] } });

        await waitFor(() => {
            expect(mockUploadImage).toHaveBeenCalled();
        });
    });

    it('redirige al login tras hacer logout', async () => {
        const mockLogout = vi.fn();
        const mockNavigate = vi.fn();

        useLogout.mockReturnValueOnce({
            logout: mockLogout,
        });

        useNavigate.mockReturnValueOnce(mockNavigate);

        render(
            <MemoryRouter>
                <ProfilePage />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText(/Cerrar sesión/i));

        await waitFor(() => {
            expect(mockLogout).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith('/login');
        });
    });

});
