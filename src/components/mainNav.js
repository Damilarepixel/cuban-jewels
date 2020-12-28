import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Bag from '../Images/bag.svg'

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
  justify-content: space-between;
  
`


function MainNav() {
    return (
        <TopNav>
            <div>
                <h3>Mon - Fri 9am - 6pm GMT</h3>
            </div>

            <div>
                <h4>Logo</h4>
            </div>

            <Atag>
                <Link to="/faq">
                    <img src={Bag} id='action-cta' alt='cart'/>
                </Link>
                <Link to="/support">
                    <img src={Bag} id='action-cta'alt='cart'/>
                </Link>
                <Link to="/support">
                    <img src={Bag} id='action-cta'alt='cart'/>
                </Link>
            </Atag>
        </TopNav>
    )
}

export default MainNav

