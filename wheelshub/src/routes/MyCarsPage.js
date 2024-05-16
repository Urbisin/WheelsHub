import React, { useEffect, useState } from 'react';
import { getPurchases } from '../api';
import { useNavigate } from 'react-router-dom';
import AppHeader from './AppHeader';

function MyCarsPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem('userId');

        if (!userId) {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const storedUsername = localStorage.getItem('userName');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    useEffect(() => {
        const fetchCompras = async () => {
            const userId = localStorage.getItem('userId');
            const comprasDelUsuario = await getPurchases(userId);
            if (Array.isArray(comprasDelUsuario)) {
                setPurchases(comprasDelUsuario);
            } else {
                console.error(comprasDelUsuario.message);
                setPurchases([]);
            }
        };
    
        fetchCompras();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
        setUsername('');
        navigate('/');
    };

    return (
        <>
            <AppHeader username={username} onLogout={handleLogout} />
            <div style={{alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <div className="MyCarsTitle">
                    <h2 style={{color: "white"}}>Mis Carros</h2>
                </div>
                <p>En esta página podrás ver los carros que has comprado.</p>
                <div className="Cars-Container">
                {purchases.map((purchase) => (
                    <div key={purchase._id} style={{backgroundColor: 'white', borderRadius: '10px'}}>
                        <h2>{purchase.car_name}</h2>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MyCarsPage;