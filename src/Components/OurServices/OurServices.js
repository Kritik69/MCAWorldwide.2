import './OurServices.css'
import OurServicesImg1 from './../../Video&Images/OurServicesImg1.png'
import OurServicesImg2 from './../../Video&Images/OurServicesImg2.png'
import OurServicesImg3 from './../../Video&Images/OurServicesImg3.png'

const OurServices = ()=> {
    return (
        <>
        <div className='container sec-padd'>
            <h2 className='ourServicesHeading'>Our Services</h2>
            <div className="cardParent">
                <div className="cards">
                    <div className="img-div">
                        <img src={OurServicesImg1} alt='' />
                    </div>
                    <div className="textParent">
                        <p className="text">
                        We help integration of Brands with events on the basis of geographical locations, age demographic, brand requirement, etc. This in turn will help the brand create more awareness about their product/services.
                        </p>
                    </div>
                </div>
                <div className="cards">
                    <div className="img-div">
                        <img src={OurServicesImg2} alt='' />
                    </div>
                    <div className="textParent">
                        <p className="text">
                        We help brands instrument ATL & BTL advertising that can help reach a wider audience in order to inform customers about the product, focus on target group of consumers, direct mail marketing drafted according to the needs of each brand, sponsorships and tailor-made marketing strategies.
                        </p>
                    </div>
                </div>
                <div className="cards">
                    <div className="img-div">
                        <img src={OurServicesImg3} alt='' />
                    </div>
                    <div className="textParent">
                        <p className="text">
                        We assist brands with on-ground activation ideas that drive consumer action through brand interaction and experience which aims to get consumers to act and to bring brands to life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default OurServices;