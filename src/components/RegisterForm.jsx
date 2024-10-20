import {useForm} from "react-hook-form";
import {useRegister} from "../hooks/useRegister";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const {register: registerUser, error, loading} = useRegister();

    const onSubmit = async (data) => {
        const result = await registerUser(data);
        if (result) {
            navigate('/profile');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} placeholder="Nombre"/>
            <input {...register("lastName")} placeholder="Apellido"/>
            <input {...register("email")} placeholder="Email" type="email"/>
            <input {...register("password")} placeholder="Contraseña" type="password"/>
            <button type="submit" disabled={loading}>
                {loading ? "Registrando..." : "Registrar"}
            </button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default RegisterForm;
