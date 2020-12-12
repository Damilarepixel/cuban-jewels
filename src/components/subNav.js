import React from 'react'
import '../App.css'
import styled from 'styled-components'
import Bag from '../Images/cart.svg'

const BottomNav = styled.nav`
  display: Flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10%;
  cursor: pointer;
  color: #000;
  font-size: 18px bold; 
`


function SubNav() {
    return (
        <BottomNav>
            <div>
                <h4>Logo</h4>
            </div>


            <div className="categories">
                <ul>
                    <li className="list">Home</li>
                    
                    
                    <li>Watches</li>
                
                
                    <li>Gold chains</li>
                
                    <li>Rings</li>
                </ul>                
            </div>

            <div className="auth">
                <h4>Sign in</h4>
                <img src={Bag} alt='cart'/>
            </div>

            
        </BottomNav>
    )
}

export default SubNav

