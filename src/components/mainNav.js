import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'




function MainNav() {
    return (
        <nav>
            <div>
                <h4>Mon - Fri 9am - 6pm GMT</h4>
            </div>

            <div>
                <h4>20% DISCOUNT ON ALL ITEMS</h4>
            </div>

            <ul>
                <Link to="/faq">
                    <li>FAQ</li>
                </Link>
                <Link to="/support">
                    <li>SUPPORT</li>
                </Link>
                <Link to="/about">
                    <li>ABOUT US</li>
                </Link>
            </ul>
        </nav>
    )
}

export default MainNav

