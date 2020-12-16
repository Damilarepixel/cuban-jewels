import React from 'react'
import Arrow from '../Images/white-arrow.svg'
import { Link } from 'react-router-dom'


const Read = {
    color: '#fff',
    fontSize: '18px',
    fontWeight: '700'
} 

const ArrowRight = {
    transition: '.3s',
    fontSize: '1.25rem',
    marginLeft: '.5rem'
}

function ReadMore() {
    return (
        <div className='light-button' as={Link} href="/">
            <h3 style={Read}>Read More</h3>
            <img src={Arrow} style={ArrowRight} className='right' alt='' />
        </div>
    )
}

export default ReadMore
