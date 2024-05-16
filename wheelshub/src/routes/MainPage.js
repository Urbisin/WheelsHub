import React, { useState, useEffect } from 'react';
import AppHeader from './AppHeader';
import AppMain from './AppMain';

function MainPage() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('userName');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    setUsername('');
  };

  return (
    <>
      <AppHeader username={username} onLogout={handleLogout} />
      <AppMain />
    </>
  );
}

export default MainPage;