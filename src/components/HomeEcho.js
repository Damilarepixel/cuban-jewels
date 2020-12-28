import React from 'react'
import { Link } from 'react-router-dom'
import Big from '../Images/big-boy.jpg'
import Twist from '../Images/twist.jpg'
import Links from '../Images/links.jpg'
import Tiny from '../Images/tiny.jpg'
import Naira from '../Images/naira.svg'
import Cart from '../components/AddButton'





function HomeEcho() {
    return (
        <div className='echo-section'>
            <div className='featured-title'>
                <h3>Necklaces</h3>
                <h2>INFINITY BEZELS</h2>
            </div>

            <div className='charlie-container bd-grid'>
                <div className='product-details' as={Link} href="/">
                    <img src={Big} alt='' className='product-img' />
                    <span className='product-info'>9pt Tennis Necklace 10ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />3,939,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Twist} alt=''className='product-img' />
                    <span className='product-info'>4pt Bezel Set Link 101ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />343,800</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Links} alt='' className='product-img' />
                    <span className='product-info'>Eternity Round Set 14k 3.7ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />162,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Tiny} alt='' className='product-img' />
                    <span className='product-info'>13pt Tennis Necklace 14K 20.60ctw</span>
                    <span className='product-price'><img src={Naira} alt='' />15,100,000</span>


                    <Cart />
                </div>
            </div>

            
        </div>
    )
}

export default HomeEcho
