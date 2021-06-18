import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

import Footer from './Footer';
import SocialBar from './SocialBar';
import Contact from './Contact';

function Navbar() { 
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        {/* <Route exact path='/' component={Home}/> 
        <Route path='/About' component={About} /> 
        <Route path='/Portfolio' component={Portfolio} />  
        <Route path='/Contact' component={Contact} />  */}
      <nav className='header'>
        <Link to='/' className='header__logo hvr-grow' onClick={closeMobileMenu}>
          DEL <br/>
          RIO
        </Link>

        <div className='header__menu' onClick={handleClick}>
         
          {click ? <CloseIcon /> : <MenuIcon />}
        </div>
          <ul className={click ? 'header__navbar active' : 'header__navbar'}>

            <li className='header__item'>
              <Link to='/' className='header__links hvr-underline-from-center hvr-grow' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='header__item'>
              <Link to='/About' className='header__links hvr-underline-from-center hvr-grow' onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            <li className='header__item'>
              <Link to='/Portfolio' className='header__links hvr-underline-from-center hvr-grow' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>

            <li className='header__item'>
              <Link to='/Contact' className='header__links hvr-underline-from-center hvr-grow' onClick={closeMobileMenu}>
                Contact 
              </Link>
            </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;