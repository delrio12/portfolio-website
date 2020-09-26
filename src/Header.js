import React from "react";
import "./Header.css";

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <div className="header__logo">
            <a className=" hvr-grow hvr-underline-from-center" href="/">
                DEL RIO
            </a>
        </div>
        <div className="header__navbar">
                    
                    <li className="header__navbar__item">
                        <Link className="hvr-grow hvr-underline-from-center" to="/About">
                            About
                        </Link>
                    </li>
                    <li className="header__navbar__item">
                        <Link className="hvr-grow hvr-underline-from-center" to="/Portfolio">
                            Projects
                        </Link>
                    </li>
                    <li className="header__navbar__item">
                        <Link className="hvr-grow hvr-underline-from-center" to="/Contact">
                            Contact
                        </Link>
                    </li>
        </div>
    </header>
  );
}
export default Header;