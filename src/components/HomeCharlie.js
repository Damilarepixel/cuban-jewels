import React from 'react'
import { Link } from 'react-router-dom'
import James from '../Images/james.jpg'
import Butterfly from '../Images/butterfly.jpg'
import Tray from '../Images/tray.jpg'
import Cross from '../Images/cross.jpg'
import Cart from '../components/AddButton'





function HomeCharlie() {
    return (
        <div className='charlie-section'>
            <h3>Featured Products</h3>
            <h2>Featured Products</h2>

            <div className='charlie-container bd-grid'>
                <div className='product-details'>
                    <img src={James} alt='' className='product-img' />
                    <span>Product Name</span>
                    <span>3,000</span>


                    <Cart as={Link} href="/" />
                </div>

                <div className='product-details'>
                    <img src={Butterfly} alt=''className='product-img' />
                    <span>Product Name</span>
                    <span>3,000</span>


                    <Cart as={Link} href="/" />
                </div>

                <div className='product-details'>
                    <img src={Tray} alt='' className='product-img' />
                    <span>Product Name</span>
                    <span>3,000</span>


                    <Cart as={Link} href="/" />
                </div>

                <div className='product-details'>
                    <img src={Cross} alt='' className='product-img' />
                    <span>Product Name</span>
                    <span>3,000</span>


                    <Cart as={Link} href="/" />
                </div>
            </div>
        </div>
    )
}

export default HomeCharlie
