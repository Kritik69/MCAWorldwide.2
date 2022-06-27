import video from './../../Video&Images/Video1.mp4'
import video2 from './../../Video&Images/Video2.mp4'
import GalleryImg1 from './../../Video&Images/GalleryImg1.jpg'
import GalleryImg2 from './../../Video&Images/GalleryImg2.jpg'
import GalleryImg3 from './../../Video&Images/GalleryImg3.jpg'
import GalleryImg4 from './../../Video&Images/GalleryImg4.jpg'
import GalleryImg5 from './../../Video&Images/GalleryImg5.jpg'
import GalleryImg6 from './../../Video&Images/GalleryImg6.jpg'
import GalleryImg7 from './../../Video&Images/GalleryImg7.jpg'
import GalleryImg8 from './../../Video&Images/GalleryImg8.jpg'
import GalleryImg9 from './../../Video&Images/GalleryImg9.jpg'
import './Gallery.css'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Gallery = ()=> {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <>
        <div className="video-wrapper">
            <div className="container">
                <h2 className='galleryHeading'>Gallery</h2>
                <div className="row videoDiv">
                    <div className="col-md-6">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe title='4' className="embed-responsive-item" width='100%' height={300} src={video2} allowFullScreen></iframe>
                            </div>
                    </div>
                    <div className="col-md-6">
                            <div className="embed-responsive embed-responsive-21by9">
                                <iframe title='5' className="embed-responsive-item" width='100%' height={300} src={video} allowFullScreen></iframe>
                            </div>
                    </div>
                </div>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    >
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
                    </Carousel>
            </div>
        </div>
        </>
    )
}

export default Gallery;