import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./styles.css";

function Header() {
  return (
    <div className="container-header">
      <div className="header-logo">
        <Link to="/">Otaku List</Link>
      </div>

      <div className="header-menu">
        <FiMenu size={26} color="#fff" />
      </div>
    </div>
  );
}

export default Header;
