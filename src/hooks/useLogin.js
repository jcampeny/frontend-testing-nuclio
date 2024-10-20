import { useState } from "react";
import axios from "axios";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async (credentials) => {
        setLoading(true);
        try {
            const response = await axios.post("/api/users/login", credentials, { withCredentials: true });
            setLoading(false);
            return response.data;
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.error || "Error en el inicio de sesión");
        }
    };

    return { login, error, loading };
};
