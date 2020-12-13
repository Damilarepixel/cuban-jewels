import React from 'react'
import styled from 'styled-component'
import Van from '../Images/van.svg'
import Return from '../Images/return.svg'

function HomeBeta() {
    return (
        <div className='story-section'>
            <div>
                <img src={Van} alt='' />
                <h3>Free delivery from 5,000</h3>
            </div>
            <div>
                <img src={Return} alt='' />
                <h3>Free return up to 30 days</h3>
            </div>

            <div>
                <div>
                    <h3>Our Story</h3>
                    <h1 style={}>Custom Tailored Jewelry At It's Finest</h1>
                    <p>lOREM IPSUM SIT DOLOR AMET, SIT DOLOR AMET LOREM IPSUM IPSUM SIT DOLOR AMET, SIT  IPSUM SIT DOLOR AMET, SIT </p>
                </div>
            </div>
        </div>
    )
}

export default HomeBeta
