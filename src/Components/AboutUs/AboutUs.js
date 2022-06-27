import './AboutUs.css';
import AboutUsImg from './../../Video&Images/AboutUsImg.png'

const AboutUs = ()=> {
    return (
        <>
            <div className="background sec-padd">
                <div className="container">
                   <div className="row align-items-center">
                    <div className="col-md-6">
                            <img className="img-fluid" src={AboutUsImg} alt="About" />
                        </div>
                        <div className="col-md-6">
                            <div className="about-wrapper text-center">
                                <h2 className='text-white'><b>ABOUT US</b></h2>
                                <p className='text-white'>Founded in 2011, MCA Worldwide (Music Culture & Art) is a PR & Marketing firm that does Brand-Tie ups, ATL & BTL, Brand Activations with events at a PAN India level. The team focuses on delivering tailored ideas as per brand prerequisite. We ensure cost-effective service, accountability and flexibility in all your requirements. Whatever your budget may be, we have solutions you will not find elsewhere.</p>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            </div>
        </>
    )
}

 export default AboutUs;