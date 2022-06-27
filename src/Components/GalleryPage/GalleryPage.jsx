import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import './GalleryPage.css'
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

function GalleryPage() {
  return (
    <>
      <NavBar />
      <div className="background sec-padd">
                <div className="container">
                   <div className="row align-items-center">
                      <h1 className='text-white contactUsHeading text-center'>Gallery</h1>
                   </div>
                </div>
            </div>
            <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
      </div>
        <div className="gallery container">
        <figure className="gallery__item gallery__item--1">
          <img src={GalleryImg1} className="gallery__img" alt="1" />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <img src={GalleryImg2} className="gallery__img" alt="2" />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img src={GalleryImg3} className="gallery__img" alt="3" />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <img src={GalleryImg4} className="gallery__img" alt="4" />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <img src={GalleryImg5} className="gallery__img" alt="5" />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <img src={GalleryImg6} className="gallery__img" alt="6" />
        </figure>
        <figure className="gallery__item gallery__item--7">
          <img src={GalleryImg7} className="gallery__img" alt="7" />
        </figure>
        <figure className="gallery__item gallery__item--8">
          <img src={GalleryImg8} className="gallery__img" alt="8" />
        </figure>
        <figure className="gallery__item gallery__item--9">
          <img src={GalleryImg9} className="gallery__img" alt="9" />
        </figure>
        <figure className="gallery__item gallery__item--10">
          <img src={GalleryImg10} className="gallery__img" alt="10" />
        </figure>
        <figure className="gallery__item gallery__item--11">
          <img src={GalleryImg11} className="gallery__img" alt="11" />
        </figure>
        <figure className="gallery__item gallery__item--12">
          <img src={GalleryImg12} className="gallery__img" alt="12" />
        </figure>
        <figure className="gallery__item gallery__item--13">
          <img src={GalleryImg13} className="gallery__img" alt="13" />
        </figure>
        </div>
      <Footer />
    </>
  );
}

export default GalleryPage;
