import React from 'react'
import Vintage from '../Images/vintage (1).jpg'
import Vintage2 from '../Images/vintage (2).jpg'
import Vintage3 from '../Images/vintage (3).jpg'
import ig from '../Images/ig.svg'


const teaser = {
    color: '#000000',
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '3rem'
}


function HomeGallery() {
    return (
        <div className='gallery-section'>
            <div className='community'>
                <img src={Vintage2} alt=''/>
            </div>
            
            <div className='community'>
                <img src={Vintage2} alt=''/>
            </div>
            
            <div className='community'>
                <img src={Vintage3} alt=''/>
            </div>

            <div className='community-teaser'>
                <img src={ig} style={teaser} alt=''/>
                <h6 style={teaser}>Join our Instagram community</h6>
            </div>
        </div>
    )
}

export default HomeGallery
