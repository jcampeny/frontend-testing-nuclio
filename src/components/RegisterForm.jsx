import {useForm} from "react-hook-form";
import {useRegister} from "../hooks/useRegister";

const RegisterForm = () => {
    const {register, handleSubmit} = useForm();
    const {register: registerUser, error, loading} = useRegister();

    const onSubmit = async (data) => {
        await registerUser(data);
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
