import {useForm} from "react-hook-form";
import {useLogin} from "../hooks/useLogin";

const LoginForm = () => {
    const {register, handleSubmit} = useForm();
    const {login, error, loading} = useLogin();

    const onSubmit = async (data) => {
        await login(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} placeholder="Email" type="email"/>
            <input {...register("password")} placeholder="Contraseña" type="password"/>
            <button type="submit" disabled={loading}>
                {loading ? "Iniciando..." : "Iniciar sesión"}
            </button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default LoginForm;
