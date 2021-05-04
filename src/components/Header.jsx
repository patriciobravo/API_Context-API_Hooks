import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSection } from '../actions';
import "../assets/css/components/Header.scss";

import Logo from '../assets/img/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const sectionActive = useSelector((state) => state.sectionActive);
  const dispatch = useDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
    console.log(section)
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link className='logo-container' to='/'>
          <img src={Logo} height={60} width={100} alt='Braking Bad' />
        </Link>
        <Nav className="mr-auto ml-3">


          <Link onClick={() => handleSetSection("Characters")}
            className={`header__nav__options-item ${sectionActive === "Characters" ? "active" : ""
              }`} to="/">Personajes</Link>
          <Link onClick={() => handleSetSection("GifsExpert")}
            className={`header__nav__options-item ${sectionActive === "GifsExpert" ? "active" : ""
              }`} to="/Gifs">GifsExpert</Link>

        </Nav>
      </Navbar>

    </>
  )


}

export default Header;