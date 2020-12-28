import React from 'react'
import { Link } from 'react-router-dom'
import Ice from '../Images/ice.jpg'
import Diamond from '../Images/diamond-ring.jpg'
import Gold from '../Images/gold-ring.jpg'
import Band from '../Images/band.jpg'
import Naira from '../Images/naira.svg'
import Cart from '../components/AddButton'





function HomeFoxtrot() {
    return (
        <div className='foxtrot-section'>
            <div className='featured-title'>
                <h3>Rings</h3>
                <h2>JADA COLLECTION</h2>
            </div>

            <div className='charlie-container bd-grid'>
                <div className='product-details' as={Link} href="/">
                    <img src={Ice} alt='' className='product-img' />
                    <span className='product-info'>Square Halo Ring 14K 1.06ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />953,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Diamond} alt=''className='product-img' />
                    <span className='product-info'>Two-Tone Double Halo Ring 3.35ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />3,417,530</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Gold} alt='' className='product-img' />
                    <span className='product-info'>4 Row Ring 14K 1.00ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />719,480</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Band} alt='' className='product-img' />
                    <span className='product-info'>Single Row Diamond Ring 14K 0.16ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />197,857</span>


                    <Cart />
                </div>
            </div>

            
        </div>
    )
}

export default HomeFoxtrot
