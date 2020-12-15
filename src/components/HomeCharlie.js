import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import James from '../Images/james.jpg'
import Butterfly from '../Images/butterfly.jpg'
import Tray from '../Images/tray.jpg'
import Cross from '../Images/cross.jpg'



const Order = styled.button`
  background: transparent;
  color: #0A1826;
  margin-top: 5px;
  border-bottom: 4px;
  display: inline-block;
`

function HomeCharlie() {
    return (
        <div className='charlie-section'>
            <h3>Featured Products</h3>
            <h2>Featured Products</h2>

            <div className='charlie-container bd-grid'>
                <div className='product-details'>
                    <img src={James} alt='' />
                    <span>Product Name</span>
                    <span>3,000</span>


                    <Order as={Link} href="/">
                        Shop Now
                    </Order>
                </div>

                <div className='product-details'>
                    <img src={Butterfly} alt='' />
                    <span>Product Name</span>
                    <span>3,000</span>


                    <Order as={Link} href="/">
                        Shop Now
                    </Order>
                </div>

                <div className='product-details'>
                    <img src={Tray} alt='' />
                    <span>Product Name</span>
                    <span>3,000</span>


                    <Order as={Link} href="/">
                        Shop Now
                    </Order>
                </div>

                <div className='product-details'>
                    <img src={Cross} alt='' />
                    <span>Product Name</span>
                    <span>3,000</span>


                    <Order as={Link} href="/">
                        Shop Now
                    </Order>
                </div>
            </div>
        </div>
    )
}

export default HomeCharlie
