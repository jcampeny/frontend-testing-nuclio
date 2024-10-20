import { useState } from "react";
import axios from "axios";

export const useProfile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getProfile = async () => {
        try {
            const response = await axios.get("/api/users/me", { withCredentials: true });
            setProfile(response.data.user);
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.error || "Error al obtener perfil");
            setLoading(false);
        }
    };

    const uploadImage = async (imageBase64) => {
        try {
            const response = await axios.post("/api/users/upload", { imageBase64 });
            setProfile((prevProfile) => ({
                ...prevProfile,
                profileImage: response.data.profileImage,
            }));
        } catch (err) {
            setError(err.response?.data?.error || "Error al subir imagen");
        }
    };

    return { profile, uploadImage, error, loading, getProfile };
};
