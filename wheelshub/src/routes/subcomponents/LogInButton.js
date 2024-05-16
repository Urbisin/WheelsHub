import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogInButton() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }

    return (
        <button className="login-button" onClick={handleLoginClick}>
            Iniciar sesión
        </button>
    );
}

export default LogInButton;