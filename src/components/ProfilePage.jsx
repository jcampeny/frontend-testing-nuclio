import {useProfile} from "../hooks/useProfile";
import {useLogout} from "../hooks/useLogout";
import {useEffect} from "react";

const ProfilePage = () => {
    const {profile, uploadImage, error, loading, getProfile} = useProfile();
    const {logout} = useLogout();

    const handleImageUpload = (event) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const handleLogout = async () => {
        await logout();
    };

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    return (
        <div>
            {loading ? (
                <p>Cargando perfil...</p>
            ) : (
                <>
                    <h1>{profile?.firstName} {profile?.lastName}</h1>
                    <img src={profile?.profileImage} alt="Profile"/>
                    <input type="file" aria-label={"Subir imagen"} onChange={handleImageUpload}/>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                    {error && <p>{error}</p>}
                </>
            )}
        </div>
    );
};

export default ProfilePage;
