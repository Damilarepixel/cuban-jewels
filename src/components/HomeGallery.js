import React from 'react'
import Vintage from '../Images/vintage (4).jpg'
import Vintage2 from '../Images/vintage (2).jpg'
import Vintage3 from '../Images/vintage (3).jpg'

function HomeGallery() {
    return (
        <div className='gallery-section'>
            <div className='community'>
                <img src={Vintage} alt=''/>
            </div>
            
            <div className='community'>
                <img src={Vintage2} alt=''/>
            </div>
            
            <div className='community'>
                <img src={Vintage3} alt=''/>
            </div>

            <div className='community'>
                <h6>Join our Instagram community</h6>
            </div>
        </div>
    )
}

export default HomeGallery
