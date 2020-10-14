import React from "react";
import "./Header.css";

import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <header className="header">
        <div className="header__logo">
            <a className="hvr-grow hvr-underline-from-center" href="/">
                DEL <br/>
                RIO
            </a>
        </div>
        <div className="header__menu mobile--unhidden hvr-grow hvr-underline-from-center"><MenuIcon fontSize="large" /></div>
        <div className="header__navbar mobile--hidden">
                    
                        <li className="header__item ">
                            <Link className="hvr-grow hvr-underline-from-center" to="/About">About</Link>
                        </li>
                        <li className="header__item" >
                            <Link className="hvr-grow hvr-underline-from-center " to="/Portfolio">
                                Projects
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link className="hvr-grow hvr-underline-from-center" to="/Contact">
                                Contact
                            </Link>
                        </li>
                    
        </div>
    </header>
  );
}
export default Header;