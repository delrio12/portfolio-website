import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
        <div className="header__logo">
            <a className=" hvr-grow hvr-underline-from-center" href="https://andresdelrio.dev">
                DEL RIO
            </a>
        </div>
        <div className="header__navbar">
                    
                    <li className="header__navbar__item">
                        <a className="hvr-grow hvr-underline-from-center" href="/Resume">
                            About
                        </a>
                    </li>
                    <li className="header__navbar__item">
                        <a className="hvr-grow hvr-underline-from-center" href="/Portfolio">
                            Projects
                        </a>
                    </li>
                    <li className="header__navbar__item">
                        <a className="hvr-grow hvr-underline-from-center" href="/Contact">
                            Contact
                        </a>
                    </li>
        </div>
    </header>
  );
}
export default Header;