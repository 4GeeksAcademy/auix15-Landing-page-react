import React from "react";


const Footer = () => {
    return (
      <footer className="footer">
        <div className="container text-center">
            {/* muestro el copyright con el año y actualizado */}
          <p>&copy; {new Date().getFullYear()} Auix15. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
