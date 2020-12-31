import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Bag from '../Images/bag.svg'
import Search from '../Images/search.svg'



const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* Remove menu */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))





const NavBar = (props) => {
    
    return (
      <nav className="">
        <div className="container menuContainer">
          <div className="centered">
            <div className="flex">
              <h3>CUBAN</h3>
              
            </div>
          </div>
          <div id="menu" className="homeLinks centered">
            <div>
              <h1 title="Close Menu" onClick={showMenu} className="closeBtn">
                x
              </h1>
              <Link className={props.active === "home"} to="/">
                Home
              </Link>
              <Link className={props.active === "about"} to="/about">
                Watches
              </Link>
              <Link
                className={props.active === "services"}
                to="/services"
              >
                Necklaces & Chains
              </Link>
              <Link
                className={props.active === "properties"}
                to="/properties"
              >
                Rings
              </Link>
              
            </div>
            <div class="nav__toggle" id="nav-toggle">
                    <i class="bx bx-menu"></i>
                </div>
          </div>

          <div className='icons'>
          <Link
                className={props.active === "contact"}
                to="/contact"
              >
                <img src={Search} alt='' />
              </Link>

              <Link
                className={props.active === "contact"}
                to="/contact"
              >
                <img src={Bag} alt='' />
              </Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;

