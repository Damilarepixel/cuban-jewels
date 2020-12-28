import React from 'react'
import { Link } from 'react-router-dom'
import James from '../Images/james.jpg'
import Butterfly from '../Images/butterfly.jpg'
import Tray from '../Images/tray.jpg'
import Cross from '../Images/cross.jpg'
import Naira from '../Images/naira.svg'
import Cart from '../components/AddButton'





function HomeCharlie() {
    return (
        <div className='charlie-section' id='featured'>
            <div className='featured-title'>
                <h3>Featured Products</h3>
                <h2>SOPHISTICATED BEAUTIES</h2>
            </div>

            <div className='charlie-container bd-grid'>
                <div className='product-details' as={Link} href="/">
                    <img src={James} alt='' className='product-img' />
                    <span className='product-info'>Custom Letter Pendant 14k 0.11ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />125,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Butterfly} alt=''className='product-img' />
                    <span className='product-info'>Bail Cross Pendant 14k 0.11ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />224,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Tray} alt='' className='product-img' />
                    <span className='product-info'>Petite Tray Pendant 14k 0.2ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />200,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Cross} alt='' className='product-img' />
                    <span className='product-info'>Ladyfly Pendant 14k 0.13ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />178,000</span>


                    <Cart />
                </div>
            </div>

            
        </div>
    )
}

export default HomeCharlie
