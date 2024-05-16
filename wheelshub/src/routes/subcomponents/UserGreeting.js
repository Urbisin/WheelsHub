import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserGreeting({ username, onLogout }) {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  
  const handleLogoutClick = () => {
    setShowLogout(false);
    onLogout();
  };

  const handleMyCarsClick = () => {
    navigate('/mycars');
  };

  return (
    <div className="dropdown" onMouseEnter={() => setShowLogout(true)} onMouseLeave={() => setShowLogout(false)}>
      <button className="dropbtn">Bienvenid@, {username}</button>
      {showLogout && (
        <div className="dropdown-content">
          <button onClick = {handleMyCarsClick}>Mis Carros</button>
          <button onClick={handleLogoutClick}>Cerrar sesión</button>
        </div>
      )}
    </div>
  );
}

export default UserGreeting;