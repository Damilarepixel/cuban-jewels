import React from 'react'
import Bag from '../Images/bag.svg'

const Add = {
    color: '#0A1826',
    fontSize: '18px',
    fontWeight: '700'
} 


const ArrowRight = {
    transition: '.3s',
    fontSize: '1.25rem',
    marginLeft: '.5rem'
}


function AddButton() {
    return (
        <div className='light-button'>
            <h3 style={Add}>Add to Cart</h3>
            <img src={Bag} style={ArrowRight} className='right' alt='' />
        </div>
    )
}

export default AddButton
