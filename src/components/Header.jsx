import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          LINK GENERATOR
        </a>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                ADD LINK <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DOWNLOAD LINK
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
