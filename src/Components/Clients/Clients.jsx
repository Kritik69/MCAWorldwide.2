import React from 'react'
import './Clients.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Img1 from './../../Video&Images/ClientImg1.png'
import Img2 from './../../Video&Images/ClientImg2.png'
import Img3 from './../../Video&Images/ClientImg3.png'
import Img4 from './../../Video&Images/ClientImg4.jpg'
import Img5 from './../../Video&Images/ClientImg5.png'
import Img6 from './../../Video&Images/ClientImg6.png'
import Img7 from './../../Video&Images/ClientImg7.png'
import Img8 from './../../Video&Images/ClientImg8.png'
import Img9 from './../../Video&Images/ClientImg9.png'
import Img10 from './../../Video&Images/ClientImg10.png'
import Img11 from './../../Video&Images/ClientImg11.png'



function Clients() {

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
        <div className="client-wrapper pb-5">
        <div className="container">
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
                    
                </Carousel>
        </div>
    </div>
    )
}

export default Clients