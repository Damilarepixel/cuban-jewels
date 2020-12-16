import React from 'react'
import Bag from '../Images/bag.svg'



const ArrowRight = {
    transition: '.3s',
    fontSize: '1.25rem',
    marginTop: '.7rem'
}


function AddButton() {
    return (
        <div>
            <img src={Bag} style={ArrowRight} className='right' alt='' />
        </div>
    )
}

export default AddButton
