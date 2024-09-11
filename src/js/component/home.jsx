// importaciones necesarias para el componente home

import React from "react";
import Navbar from "./navbar"; 
import About from "./about";
import Jumbotron from "./jumbotron"; 
import Card from "./card"; 
import '../../styles/index.css';
import Footer from "./Footer";
import cardData from "./cardData";


const Home = () => {
  return (
    <>
      <Navbar />
      <div>
      {/* seccion del home */}
      <section id="home" className="home-section">
        <div className="container mt-4"></div>
      </section>
      {/* seccion de las cards */}
      <Jumbotron />
      <section id="card" className="card-section">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-4" key={index}>
              <Card
                title={card.title}
                text={card.text}
                image={card.image}
                alertMessage={card.alertMessage}
              />
            </div>
          ))}
        </div>
      </section>
      {/* seccion del about */}
      <section id="about">
        <About />
      </section>
      {/* seccion del footer */}
      <section>
      <Footer/>
      </section>
    </div>
    </>
  );
};

export default Home;
