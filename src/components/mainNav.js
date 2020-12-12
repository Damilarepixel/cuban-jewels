import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TopNav = styled.nav`
  display: Flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  color: #000;
  font-size: 18px bold; 
`

const Atag = styled.ul`
  display: flex;
`


function MainNav() {
    return (
        <TopNav>
            <div>
                <h4>Mon - Fri 9am - 6pm GMT</h4>
            </div>

            <div>
                <h4>20% DISCOUNT ON ALL ITEMS</h4>
            </div>

            <Atag>
                <Link to="/faq">
                    <li className="list">FAQ</li>
                </Link>
                <Link to="/support">
                    <li>SUPPORT</li>
                </Link>
                <Link to="/about">
                    <li>ABOUT US</li>
                </Link>
            </Atag>
        </TopNav>
    )
}

export default MainNav

