import React from "react";
import { FiX, FiHome, FiList, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.css";
function DrawerMenu({ state, callBack }) {
  return (
    <div
      className="container-drawer-menu"
      style={{ display: state ? "flex" : "none" }}
    >
      <div className="header-drawer-menu">
        <FiX color="#000" size={24} onClick={callBack} />
      </div>
      <div className="content-drawer-menu">
        <ul>
          <li>
            <Link to="/">
              <FiHome color="#23231f" size={18} />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/list">
              <FiList color="#23231f" size={18} />
              <p>Lista Animes</p>
            </Link>
          </li>
          <li>
            <Link to="/auth">
              <FiLogIn color="#23231f" size={18} />
              <p>Login</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DrawerMenu;
