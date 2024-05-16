import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./subcomponents/SearchBar";
import LogInButton from "./subcomponents/LogInButton";
import UserGreeting from "./subcomponents/UserGreeting";

function AppHeader( {username, onLogout }) {
    return (
        <header className="App-header">
            <div className="App-header-menu">
                <Link to="/" aria-label="logo" title="logo" className="App-header a">
                    <img src="logo.jpeg" className="App-header-logo" alt="logo" />
                    <h1 className="App-header-title">WheelsHub</h1>
                </Link> 
                <div className="App-header-searchbar">
                    <SearchBar />
                </div>
                <div className="button-container">
                    {username ? <UserGreeting username={username} onLogout={onLogout} /> : <LogInButton />}
                </div>
            </div>
        </header>
    );
}

export default AppHeader;