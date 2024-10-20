import { useState } from "react";
import axios from "axios";

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const register = async (formData) => {
        setLoading(true);
        try {
            const response = await axios.post("/api/users/register", formData);
            setLoading(false);
            return response.data;
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.error || "Error en el registro");
        }
    };

    return { register, error, loading };
};
