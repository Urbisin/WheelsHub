import React, { useState } from 'react';
import { register } from '../api/index';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const status = await register(username, password);

    if (status === 200) {
      alert('Registro exitoso');
      navigate('/login')
    } else {
      alert('Error al registrarse');
    }
  };

  return (
    <div>
      <h2>Registrarse</h2>
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
          <button style={{margin: '10px'}} type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;