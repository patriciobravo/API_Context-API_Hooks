import React from 'react';
import { Link} from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { setSection} from '../actions';


import Logo from '../assets/img/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import  { Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    const sectionActive = useSelector((state) => state.sectionActive);
    const dispatch = useDispatch();

    const handleSetSection = ( section ) => {
        dispatch(setSection(section));
    };

    return (

        <Navbar bg="light" expand="lg">
        <Link className='logo-container' to='/'>          
            <img src={Logo} height={60} width={100} alt='Braking Bad' />
        </Link>
        
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
            <ul className="header__nav__options">
            <li
              onClick={() => handleSetSection("Characters")}
              className={`header__nav__options-item ${
                sectionActive === "Characters" ? "active" : ""
              }`}
            >
              <Link to="/">Characters</Link>
            </li>
            <li
              onClick={() => handleSetSection("Favorites")}
              className={`header__nav__options-item ${
                sectionActive === "Favorites" ? "active" : ""
              }`}
            >
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
          
           
         
            </Nav>
          
        </Navbar.Collapse>
    </Navbar>

    )
  

}

export default Header;