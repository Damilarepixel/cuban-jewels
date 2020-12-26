import React from 'react'
import Facebook from '../Images/facebook.svg'
import Instagram from '../Images/instagram.svg'
import Twitter from '../Images/twitter.svg'


const links = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#fff'
}
function FooterLinks() {
    return (
        <div className='footer-links'>
            <div>
                <h4 style={{links}}>2020, Cuban shit</h4>
            </div>

            <div>
                <h4 style={{links}}>Return policy</h4>
                <h4 style={{links}}>Terms of Service</h4>
                <h4 style={{links}}>Contact Us</h4>
            </div>

            <div>
                <img src={Facebook} alt='' />
                <img src={Twitter} alt='' />
                <img src={Instagram} alt='' />
            </div>
        </div>
    )
}

export default FooterLinks
