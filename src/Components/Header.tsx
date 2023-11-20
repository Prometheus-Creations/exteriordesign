/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import '../css-styling/Header.css'
import { Link } from 'react-router-dom';
import AuthDetails from './auth/AuthDetails';


    function Header({ isLogged, setIsLogged }: { isLogged: boolean; setIsLogged: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <header>
            <div className="headercontact">
                <p >Call: <a href="tel:+13105085523">(310)-508-5523</a></p>
                <p >Email: <a href="mailto:akbarsauto310@gmail.com">akbarsauto310@gmail.com</a></p>
            </div>
            <label className="hamburger-menu">
                <input type="checkbox" />
            </label>
            <aside className="sidebar" >
                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/inventory" className="nav-link">Inventory</Link>
                    <Link to="/financing" className="nav-link">Financing</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/getintouch" className="nav-link">Get In Touch</Link>
                    <Link to="/post" className="nav-link">Post A Vehicle</Link>
                    <Link to="/signin" className="nav-link">Sign In/Sign Up</Link>
                    <AuthDetails isLogged={isLogged} setIsLogged={setIsLogged} />
                </nav>
            </aside>
        </header>
    )
}

export default Header