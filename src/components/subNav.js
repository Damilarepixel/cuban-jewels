import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Bag from '../Images/bag.svg'
import Search from '../Images/search.svg'








const NavBar = (props) => {
    const openNav = () => {
      document.getElementById("menu").classList.toggle("open");
    };
    return (
      <nav className="">
        <div className="container menuContainer">
          <div className="centered">
            <div className="flex">
              <h3>Ludigi</h3>
              <h3 onClick={openNav} className="fa fa-bars menuIcon"></h3>
            </div>
          </div>
          <div id="menu" className="homeLinks centered">
            <div>
              <h1 title="Close Menu" onClick={openNav} className="closeBtn">
                x
              </h1>
              <Link className={props.active === "home" && "accent"} to="/">
                Home
              </Link>
              <Link className={props.active === "about" && "accent"} to="/about">
                About
              </Link>
              <Link
                className={props.active === "services" && "accent"}
                to="/services"
              >
                Services
              </Link>
              <Link
                className={props.active === "properties" && "accent"}
                to="/properties"
              >
                Properties
              </Link>
              <Link
                className={props.active === "contact" && "accent"}
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;

