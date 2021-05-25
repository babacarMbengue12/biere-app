import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Bière App
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
