import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          LINK GENERATOR
        </Link>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                ADD LINK
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/download">
                DOWNLOAD LINK <span>{props.basketNumber}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
