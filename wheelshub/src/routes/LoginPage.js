import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/index';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const [user, status] = await login(username, password);

    if (status === 200) {
      localStorage.setItem('userId', user[0].id);
      localStorage.setItem('userName', user[0].name);
      navigate('/');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  }

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <label style={{margin: '5px'}}>
            Nombre de usuario:
            <input style={{marginLeft: '10px'}} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label style={{margin: '5px'}}>
            Contraseña:
            <input style={{marginLeft: '65px'}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button style={{margin: '10px'}} type="submit">Iniciar sesión</button>
          <button style={{margin: '0px'}} type="button" onClick={handleRegisterClick}>Registrarme</button>
          </div>
      </form>
    </div>
  );
}

export default LoginPage;