import React from 'react'
import './Events.css';
import BannerImg from './../../Video&Images/NavyBlueBannerImg.png'

function Event() {
  return (
      <div className='event-wrapper'>
        <div className="container">
            <div className="bannerDiv p-1">
                <img src={BannerImg} alt="" className="bannerImg img-fluid mt-5" />
                <h2 className="eventText mt-5 mb-5">Are your weekends boring?? Don’t worry, get to know about the event happening in your place.</h2>
                {/* <button className="viewEvents mb-5 p-2">View Events</button> */}
            </div>
        </div>
    </div>
  )
}

export default Event;