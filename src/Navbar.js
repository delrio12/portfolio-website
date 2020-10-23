import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'


function Navbar() { 
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
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