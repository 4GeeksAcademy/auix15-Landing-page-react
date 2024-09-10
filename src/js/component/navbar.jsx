//importaciones

import React from "react";
import { Link } from "react-scroll"; //librería para poder crear enlaces con desplazamiento hacia otra seccion

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">auix15</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"> 
              <Link
                className="nav-link active"
                to="home" 
                smooth={true}
                duration={500}
              >
                Home
              </Link>  
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about" // Id de la sección "Sobre Mí"
                smooth={true}
                duration={500}
              >
                Sobre Mí
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/auix15"
                target="_blank"
                rel="noopener noreferrer" //buena practica de seg.
              >
                MiGitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/auixhua-martin-406233278"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
