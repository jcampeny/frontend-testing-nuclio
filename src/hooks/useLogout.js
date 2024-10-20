import axios from "axios";

export const useLogout = () => {
    const logout = async () => {
        await axios.post("/api/users/logout");
    };

    return { logout };
};
