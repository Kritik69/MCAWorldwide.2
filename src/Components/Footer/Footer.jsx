import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import pdf from './../../Video&Images/MCAWorldwidePDF.pdf'

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
              <Link to='/contactus' className='links1' href="#">Contact</Link>
              <a href={pdf} className='blinking h5' target="_blank">Download PR Proposal</a>
            </div>
            <div className="contact col-md-4">
              <h3><b>Contact</b></h3>
              <p><FontAwesomeIcon icon={faEnvelope} /> <a className='links1' href="mailto:activations@mcaworldwide.in">activations@mcaworldwide.in</a></p>
              <p><FontAwesomeIcon icon={faLocation} /> MCA Worldwide, Business Point, 103 Lohana Colony, Paliram Road, Andheri West, Mumbai – 400058</p>
              <p><FontAwesomeIcon icon={faPhone} /> <a className='links1' href="tel:+918879028513">+91 8879028513</a></p>
              <div className="iconsDiv">
              <h6><a className='text-decoration-none text-white' target='_blank' href="https://www.instagram.com/worldwide_mca/"><FontAwesomeIcon icon={faInstagram} /></a></h6>
              <h6><a className='text-decoration-none text-white' target='_blank' href="https://www.facebook.com/musicculturearts/"><FontAwesomeIcon icon={faFacebook} /></a></h6>
              <h6><a className='text-decoration-none text-white' target='_blank' href="https://www.linkedin.com/company/music-culture-&-arts"><FontAwesomeIcon icon={faLinkedin} /></a></h6>
              <h6><a
                    href="https://wa.me/+919848477202"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-whatsapp whatsapp-icon"></i>
                  </a>
              </h6>
              </div>
            </div>
        </div>
      </div>
    </div>
      <div className='container-fluid footerParent2'>
        <div className='container'>
          <div className="footer2 row">
            <p className='text-center'>© Copyright 2022 MCA Worldwide | Developed by <a className='v-link' target='_blank' href='https://vectorart.co/'>VectorArt</a></p>
          </div>
      </div>
    </div>
    </>
  )
}

export default Footer