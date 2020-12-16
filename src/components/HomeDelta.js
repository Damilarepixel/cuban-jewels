import React from 'react'
import { Link } from 'react-router-dom'
import Rolly from '../Images/rolly.jpg'
import Rolex from '../Images/rolex.jpg'
import Mille from '../Images/mille.jpg'
import Hublot from '../Images/hublot.jpg'
import Cart from '../components/AddButton'





function HomeDelta() {
    return (
        <div className='delta-section'>
            <h3>Wrist Watches</h3>
            <h2>Featured Products</h2>

            <div className='charlie-container bd-grid'>
                <div className='product-details' as={Link} href="/">
                    <img src={Rolly} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Rolex} alt=''className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Mille} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Hublot} alt='' className='product-img' />
                    <span className='product-info'>Product Name</span>
                    <span className='product-price'>3,000</span>


                    <Cart />
                </div>
            </div>

            
        </div>
    )
}

export default HomeDelta
