import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function atoms() {
  return (
    <Link to="/">
      <FiHome color="#23231f" size={18} />
      Home
    </Link>
  );
}

export default atoms;
