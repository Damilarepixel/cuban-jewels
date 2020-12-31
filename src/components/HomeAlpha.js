import React from 'react'
import '../App.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Cta = styled.button`
  background: #d88a83;
  padding: 1rem 1.5rem;
  color: #fff;
  margin-top: 20px;
  border-radius: 4px;
  display: inline-block;
`


const title = {
    color : '#fff',
    fontSize : '40px'
}

const category = {
    color : '#fff',
    fontSize : '22px'
}

function HomeAlpha() {
    return (
        <div style={{backgroundImage : `url(${'/img/blackring.jpg'}`}} className='top-section'>

            <div className='top-cta'>
                <h2 style={title} className='text-block'>CUBAN JEWELRY</h2>
                <h5 style={category} className='text-block'>Top-notch Diamond Collections </h5>

                <Cta as={Link} href="/">
                    Shop Now
                </Cta>
            </div>
        </div>
    )
}

export default HomeAlpha
