import React from 'react'
import { Link } from 'react-router-dom'
import Ice from '../Images/ice.jpg'
import Diamond from '../Images/diamond-ring.jpg'
import Gold from '../Images/gold-ring.jpg'
import Band from '../Images/band.jpg'
import Cart from '../components/AddButton'





function HomeFoxtrot() {
    return (
        <div className='foxtrot-section'>
            <h3>Featured Products</h3>
            <h2>Featured Products</h2>

            <div className='charlie-container bd-grid'>
                <div className='product-details' as={Link} href="/">
                    <img src={Ice} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Diamond} alt=''className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Gold} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Band} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>
            </div>

            
        </div>
    )
}

export default HomeFoxtrot
