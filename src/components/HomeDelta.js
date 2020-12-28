import React from 'react'
import { Link } from 'react-router-dom'
import Rolly from '../Images/rolly.jpg'
import Rolex from '../Images/rolex.jpg'
import Mille from '../Images/mille.jpg'
import Hublot from '../Images/hublot.jpg'
import Naira from '../Images/naira.svg'
import Cart from '../components/AddButton'





function HomeDelta() {
    return (
        <div className='delta-section'>
            <div className='featured-title'>
                <h3>Wrist Watches</h3>
                <h2>TICKING LUXURY</h2>
            </div>

            <div className='charlie-container bd-grid'>
                <div className='product-details' as={Link} href="/">
                    <img src={Rolly} alt='' className='product-img' />
                    <span className='product-info'>Rolex Datejust 36mm SS 14.44</span>
                    <span className='product-price'>Call For Price</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Rolex} alt=''className='product-img' />
                    <span className='product-info'>Rolex Diamond 36mm 18K/SS</span>
                    <span className='product-price'>Call For Price</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Mille} alt='' className='product-img' />
                    <span className='product-info'>Richard Mille Brush Finish 18k</span>
                    <span className='product-price'><img src={Naira} alt='' />5,305,000</span>


                    <Cart />
                </div>

                <div className='product-details'>
                    <img src={Hublot} alt='' className='product-img' />
                    <span className='product-info'> Hublot Classic Fusion 44mm</span>
                    <span className='product-price'>Call For Price</span>


                    <Cart />
                </div>
            </div>

            
        </div>
    )
}

export default HomeDelta
