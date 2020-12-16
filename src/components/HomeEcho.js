import React from 'react'
import { Link } from 'react-router-dom'
import James from '../Images/james.jpg'
import Butterfly from '../Images/butterfly.jpg'
import Tray from '../Images/tray.jpg'
import Cross from '../Images/cross.jpg'
import Cart from '../components/AddButton'





function HomeEcho() {
    return (
        <div className='echo-section'>
            <h3>Featured Products</h3>
            <h2>Featured Products</h2>

            <div className='charlie-container bd-grid'>
                <div className='product-details' as={Link} href="/">
                    <img src={James} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Butterfly} alt=''className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Tray} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Cross} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>
            </div>

            
        </div>
    )
}

export default HomeEcho
