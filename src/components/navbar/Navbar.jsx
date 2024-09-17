import React from 'react';
import './Navbar.scss';

function Navbar() {
    return (
    <nav className="navbar">
        <div className="navbar_link">
            <a href="#presentation">
                <div>Présentation</div>
            </a>
            <a href="#competences">
                <div>Compétences</div>
            </a>
            <a href="#logiciel">
                <div>Logiciel</div>
            </a>
            <a href="#projets">
                <div>Projets</div>
            </a>
            <a href="#contact">
                <div>Contact</div>
            </a>
        </div>
    </nav>
    );
}

export default Navbar;
