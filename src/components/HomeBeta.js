import React from 'react'
import { Link } from 'react-router-dom'
import Couple from '../Images/couple.jpg'
import LightButton from '../components/LightButton'








 
const storyLine = {
    fontSize: '19px',
    color: '#646c76',
    lineHeight: '1.6',
    marginTop: '32px',
    marginBottom: '40px'
}





function HomeBeta() {
    return (
        <div className='story-section'>            

            <div className='the-story'>
                <div className='the-main-story'>
                    <h3>Our Story</h3>
                    <h1 id='big-text'>Custom Tailored Jewelry At It's Finest</h1>
                    <p style={storyLine}>Cuban Jewelry is a Lagos-based e-commerce jewelry brand that retails jewelry pieces from across the globe. We have a history of delivering luxury at the speed of joy and pleasure to our clients which has since made us the preferable store for those who are committed to top-notch quality.</p>
                    
                    <LightButton as={Link} href="/" className='light-btn' />
                </div>
                <div>
                    <img className='couple' src={Couple} alt='' />
                </div>

                
            </div>
        </div>
    )
}

export default HomeBeta
