import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faLinkedin, faPinterest, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)

function Footer() {
  return (
    <>
      <div className='container-fluid footerParent'>
        <div className='container'>
        <div className="footer1 py-4 row">
            <div className="mca col-md-5">
              <h3><b>MCA</b></h3>
              <p className='fw-semibold'>Founded in 2011, MCA Worldwide (Music Culture & Art) is a PR & Marketing firm that does Brand-Tie ups, ATL & BTL, Brand Activations with events at a PAN India level. The team focuses on delivering tailored ideas as per brand prerequisite. We ensure cost-effective service, accountability and flexibility in all your requirements. Whatever your budget may be, we have solutions you will not find elsewhere.</p>
            </div>
            <div className="blog col-md-3">
              <h3><b>Quick Links</b></h3>
              <Link to='/' className='links' href="#">Home</Link>
              <Link to='/gallerypage' className='links' href="#">Gallery</Link>
              <Link to='/contactus' className='links' href="#">Contact</Link>
            </div>
            <div className="contact col-md-4">
              <h3><b>Contact</b></h3>
              <p><FontAwesomeIcon icon={faEnvelope} /> rohit@mcaworldwide.in</p>
              <p><FontAwesomeIcon icon={faLocation} /> Music Culture & Arts, Business Point, 103 Lohana Colony, Paliram Road, Andheri West, Mumbai – 400058</p>
              <p><FontAwesomeIcon icon={faPhone} /> +91 8879028513</p>
              <div className="iconsDiv">
              <h6><a className='text-decoration-none text-white' target='_blank' href="https://www.instagram.com/music_culture_art/"><FontAwesomeIcon icon={faInstagram} /></a></h6>
              <h6><a className='text-decoration-none text-white' target='_blank' href="https://www.facebook.com/musicculturearts/"><FontAwesomeIcon icon={faFacebook} /></a></h6>
              <h6><a className='text-decoration-none text-white' target='_blank' href="https://www.linkedin.com/company/music-culture-&-arts"><FontAwesomeIcon icon={faLinkedin} /></a></h6>
              <h6><a className='text-decoration-none text-white' target='_blank' href="https://in.pinterest.com/musiccultureart/"><FontAwesomeIcon icon={faPinterest} /></a></h6>
              </div>
            </div>
        </div>
      </div>
    </div>
      <div className='container-fluid footerParent2'>
        <div className='container'>
          <div className="footer2 row">
            <p className='text-center'>© Copyright 2021 MCAworldwide | Developed by <a className='v-link' target='_blank' href='https://vectorart.co/'>VectorArt</a></p>
          </div>
      </div>
    </div>
    </>
  )
}

export default Footer