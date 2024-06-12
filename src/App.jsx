import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/login' Component={Login} />
          <Route path='/signup' Component={Signup} />
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/' Component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
