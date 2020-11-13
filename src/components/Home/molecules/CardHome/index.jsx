import React from "react";

// import { Container } from './styles';

function CardHome({ title, children }) {
  return (
    <div className="container-card-home">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default CardHome;
