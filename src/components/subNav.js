import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Bag from '../Images/bag.svg'
import Search from '../Images/search.svg'
import styled from 'styled-components'



const BottomNav = styled.nav`
  display: Flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 15px 10%;
  color: #000;
  font-size: 18px bold; 
`


const Atag = styled.ul`
  display: flex;
  justify-content: space-between;
  
`


function SubNav() {
    return (
        <BottomNav>

            <div className='logo'>
                <h4>Logo</h4>
            </div>

            <div className="categories">
                <ul>
                    <Link to="/faq">
                    <li className="list" id='#'>Home</li>
                    </Link>
                    <Link to="/#featured" id='#featured'>
                    <li id='#featured'>Watches</li>
                    </Link>
                    <Link to="/support">
                    <li>Gold chains</li>
                    </Link>
                    <Link to="/faq">
                        <li className="list" id='#'>Rings</li>
                    </Link>
                </ul>                
            </div>


            <Atag>
                <Link to="/faq">
                    <img src={Search} id='action-cta' alt='cart'/>
                </Link>
                <Link to="/support">
                    <img src={Bag} id='action-cta' alt='cart'/>
                </Link>
            </Atag>

            

            
        </BottomNav>
    )
}

export default SubNav

