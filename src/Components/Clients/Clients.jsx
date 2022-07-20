import React from 'react'
import './Clients.css'
import Img1 from './../../Video&Images/c1.png'
import Img2 from './../../Video&Images/c2.png'
import Img3 from './../../Video&Images/c3.png'
import Img4 from './../../Video&Images/c4.png'
import Img5 from './../../Video&Images/c5.png'
import Img6 from './../../Video&Images/c6.png'
import Img7 from './../../Video&Images/c7.png'
import Img8 from './../../Video&Images/c8.png'
import Img9 from './../../Video&Images/c9.png'
import Img10 from './../../Video&Images/c10.png'
import Img11 from './../../Video&Images/c11.png'
import Img12 from './../../Video&Images/c12.png'
import Img13 from './../../Video&Images/c13.png'
import Img14 from './../../Video&Images/c14.png'
import Img15 from './../../Video&Images/c15.png'
import Img16 from './../../Video&Images/c16.png'
import Img17 from './../../Video&Images/c17.png'
import Img18 from './../../Video&Images/c18.png'
import Img19 from './../../Video&Images/c19.png'
import Slider from "react-slick";



function Clients() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 3000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
      }

    return (
        <div className="client-wrapper pb-5">
        <div className="container">
            <Slider {...settings}>
                <div className='image-item'>
                    <img className='slide-img' src={Img1} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img2} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img3} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img4} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img5} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img6} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img7} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img8} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img9} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img10} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img11} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img12} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img13} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img14} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img15} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img16} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img17} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img18} alt='' />
                </div>
                <div className='image-item'>
                    <img className='slide-img' src={Img19} alt='' />
                </div>
            </Slider> 
        </div>
    </div>
    )
}

export default Clients