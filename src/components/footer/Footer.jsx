import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='footer_icons'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
            <div className='footer_terms'>
                <p> <span><i class="fa-regular fa-copyright"></i> </span>Copyright sightname. All Rights reserved.</p>
                <p> Powered by create Ecommerce </p>
            </div>
        </div>
    </div>
  )
}

export default Footer
