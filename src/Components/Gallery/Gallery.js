import GalleryImg1 from './../../Video&Images/GalleryImg1.jpg'
import GalleryImg2 from './../../Video&Images/GalleryImg2.jpg'
import GalleryImg3 from './../../Video&Images/GalleryImg3.jpg'
import GalleryImg4 from './../../Video&Images/GalleryImg4.jpg'
import GalleryImg5 from './../../Video&Images/GalleryImg5.jpg'
import GalleryImg6 from './../../Video&Images/GalleryImg6.jpg'
import GalleryImg7 from './../../Video&Images/GalleryImg7.jpg'
import GalleryImg8 from './../../Video&Images/GalleryImg8.jpg'
import GalleryImg9 from './../../Video&Images/GalleryImg9.jpg'
import GalleryImg10 from './../../Video&Images/GalleryImg10.jpg'
import GalleryImg11 from './../../Video&Images/GalleryImg11.jpg'
import GalleryImg12 from './../../Video&Images/GalleryImg12.jpg'
import GalleryImg13 from './../../Video&Images/GalleryImg13.jpg'
import GalleryImg14 from './../../Video&Images/GalleryImg14.jpg'
import GalleryImg15 from './../../Video&Images/GalleryImg15.jpg'
import Slider from "react-slick";
import './Gallery.css'
import React from 'react'

const Gallery = ()=> {

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
        <>
        <div className="video-wrapper">
            <div className="container">
                <div className="row videoDiv">
                    <div className="col-md-6">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Hb6OQ4I-wfY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                    </div>
                    <div className="col-md-6">
                            <div className="embed-responsive embed-responsive-21by9">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/5EmQBRo-r7g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                    </div>
                </div>
                <div className="row videoDiv">
                    <div className="col-md-6">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/37J7x9bhw1M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                    </div>
                    <div className="col-md-6">
                            <div className="embed-responsive embed-responsive-21by9">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/s0fQVJkaRPU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg1} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg2} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg3} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg4} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg5} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg6} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg7} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg8} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg9} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg10} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg11} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg12} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg13} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg14} alt='' />
                    </div>
                    <div className='image-item'>
                        <img className='slide-img' src={GalleryImg15} alt='' />
                    </div>
                </Slider>         
            </div>
        </div>
        </>
    )
}

export default Gallery;