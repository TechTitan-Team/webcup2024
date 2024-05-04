import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import React from "react";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>"TechTitan"</code> tutorials.
        </p>
        <Link
          className="App-link"
          to="/test"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
};

export default Home;