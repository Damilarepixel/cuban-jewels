import React from 'react'
import { Link } from 'react-router-dom'
import Gecko from '../Images/gecko.jpg'
import ReadMore from '../components/ReadMore'



const story = {
    color : '#fff',
    fontSize : '20px'
}


const BigText = {
    fontSize: '50px',
    fontWeight: '700',
    color: '#fff'
}


const storyLine = {
    fontSize: '16px',
    color: '#fff',
    lineHeight: '1.6'
}






function HomeGecko() {
    return (
        <div className='gecko-section'>

            <div className='the-story'>
                <div>
                    <img className='couple' src={Gecko} alt='' />
                </div>


                <div className='the-main-story'>
                    <h3 style={story}>Why Us</h3>
                    <h1 style={BigText}>Custom Tailored Jewelry At It's Finest</h1>
                    <p style={storyLine}>Lorem sit dolor amet Lorem sit dolor amet Lorem sit dolor amet, Lorem sit dolor amet Lorem sit dolor amet Lorem sit dolor amet Lorem sit dolor amet. </p>
                    
                    <ReadMore  as={Link} href="/" />
                </div>                
            </div>
        </div>
    )
}

export default HomeGecko

