import React from 'react'
import styled from 'styled-components'
import Van from '../Images/van.svg'

const TopNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 50px; 
`




function MainNav() {
    return (
        <TopNav>
            <div className='policy-prop'>
                    <img src={Van} alt='' />
                    <p style={{marginLeft: '15px'}}>Free delivery within Lagos</p>
            </div>            
        </TopNav>
    )
}

export default MainNav

