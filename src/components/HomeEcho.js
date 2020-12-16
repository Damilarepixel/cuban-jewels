import React from 'react'
import { Link } from 'react-router-dom'
import Big from '../Images/big-boy.jpg'
import Twist from '../Images/twist.jpg'
import Links from '../Images/links.jpg'
import Tiny from '../Images/tiny.jpg'
import Cart from '../components/AddButton'





function HomeEcho() {
    return (
        <div className='echo-section'>
            <h3>Featured Products</h3>
            <h2>Featured Products</h2>

            <div className='charlie-container bd-grid'>
                <div className='product-details' as={Link} href="/">
                    <img src={Big} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Twist} alt=''className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Links} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Tiny} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>
            </div>

            
        </div>
    )
}

export default HomeEcho
