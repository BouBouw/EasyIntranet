import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Auth from "../../functions/Auth";

export const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        Auth.Logout().then((result) => {
            navigate('/home');
        });
    }, [])
    return(
        <>
        </>
    )
}