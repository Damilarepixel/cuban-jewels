import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Cta = styled.button`
  background: #0A1826;
  padding: 1rem 1.5rem;
  color: #fff;
  margin-top: 20px;
  border-radius: 4px;
  display: inline-block;
`
const title = {
    color : '#fff',
    fontSize : '18px'
}

const category = {
    color : '#fff',
    fontSize : '22px'
}

function Button() {
    return (
        <div className='top-cta'>
            <h5 style={title} className='text-block'>Custom Unisex Diamond Rings </h5>
            <h2 style={category} className='text-block'>Diamond Rings</h2>

            <Cta as={Link} href="/">
                Shop Now
            </Cta>
        </div>
    )
}

export default Button
