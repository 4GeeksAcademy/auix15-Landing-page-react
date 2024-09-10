import React from "react";

const Card = (props) => {
    const handleClick = () => {
      alert(props.alertMessage || "To be continued...")
    }; //aquí mostraré un mensaje de alerta porque proximamente se construirá un botón de enlace ahora mismo comentado más abajo

  return (
    <div className="card shadow-lg" style={{ width: "20rem", margin: "20px" }}>
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <button onClick={handleClick} className="btn btn-outline-warning">
          {props.buttonText}
        </button> 
        
        {/* <a href={props.link} className="btn btn-outline-warning">{props.buttonText}</a> */}
      </div>
    </div>
  );
};

export default Card;
