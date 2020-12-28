import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import styled from 'styled-components'


const BottomNav = styled.nav`
  display: Flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 5px 10%;
  cursor: pointer;
  color: #000;
  font-size: 18px bold; 
`


function SubNav() {
    return (
        <BottomNav>

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

            

            
        </BottomNav>
    )
}

export default SubNav

