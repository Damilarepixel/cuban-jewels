import React from 'react'
import Certified from '../Images/Vector-2.svg'
import Quality from '../Images/Vector.svg'
import Value from '../Images/Vector-1.svg'

function HomeHotel() {
    return (
        <div className='hotel-section'>
            <div>
                <img src={Certified} alt='' />
                <h1>CUSTOME TAILORED SHIT</h1>
                <p>Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet,Lorem ipsum sit dolor amet</p>
            </div>

            <div>
                <img src={Quality} alt='' />
                <h1>CUSTOME TAILORED SHIT</h1>
                <p>Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet,Lorem ipsum sit dolor amet</p>
            </div>

            <div>
                <img src={Value} alt='' />
                <h1>CUSTOME TAILORED SHIT</h1>
                <p>Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet,Lorem ipsum sit dolor amet</p>
            </div>
        </div>
    )
}

export default HomeHotel
