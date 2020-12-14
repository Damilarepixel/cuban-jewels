import React from 'react'
import { Link } from 'react-router-dom'
import Van from '../Images/van.svg'
import Return from '../Images/return.svg'
import Couple from '../Images/couple.jpg'
import LightButton from '../components/LightButton'



const story = {
    color : '#000',
    fontSize : '20px'
}


const BigText = {
    fontSize: '50px',
    fontWeight: '700',
    color: '#0A1826'
}


const storyLine = {
    fontSize: '16px',
    color: '#646c76',
    lineHeight: '1.6'
}





function HomeBeta() {
    return (
        <div className='story-section'>
            <div className='policy'>
                <div className='policy-prop'>
                    <img src={Van} alt='' />
                    <p style={{marginLeft: '15px'}}>Free delivery from 5,000</p>
                </div>
                <div className='policy-prop'>
                    <img src={Return} alt='' />
                    <p style={{marginLeft: '15px'}}>Free return up to 30 days</p>
                </div>
            </div>

            <div className='the-story'>
                <div className='the-main-story'>
                    <h3 style={story}>Our Story</h3>
                    <h1 style={BigText}>Custom Tailored Jewelry At It's Finest</h1>
                    <p style={storyLine}>Lorem sit dolor amet Lorem sit dolor amet Lorem sit dolor amet, Lorem sit dolor amet Lorem sit dolor amet Lorem sit dolor amet Lorem sit dolor amet. </p>
                    
                    <LightButton as={Link} href="/" />
                </div>
                <div>
                    <img className='couple' src={Couple} alt='' />
                </div>

                
            </div>
        </div>
    )
}

export default HomeBeta
