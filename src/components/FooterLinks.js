import React from 'react'
import Facebook from '../Images/facebook.svg'
import Instagram from '../Images/instagram.svg'
import Twitter from '../Images/twitter.svg'



function FooterLinks() {
    return (
        <div className='footer-links'>
            

            <div className='links-tags'>
                <h4>Support</h4>
                <br />
                <p className='footer-link'>Return policy</p>
                <p className='footer-link'>Terms of Service</p>
                <p className='footer-link'>Contact Us</p>
            </div>

            <div className='links-tags'>

                <h4>Support</h4>
                <br />
                <p className='footer-link'>Return policy</p>
                <p className='footer-link'>Terms of Service</p>
                <p className='footer-link'>Contact Us</p>
            </div>

            <div className='links-tags'>

                <h4>Support</h4>
                <br/>
                <p className='footer-link'>Return policy</p>
                <p className='footer-link'>Terms of Service</p>
                <p className='footer-link'>Contact Us</p>
            </div>


            <div className='socials'>
                    <img src={Facebook} alt='' />
                    <img src={Twitter} alt='' />
                    <img src={Instagram} alt='' />
                </div>
            
            
            
        </div>
    )
}

export default FooterLinks
