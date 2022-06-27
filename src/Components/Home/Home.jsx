import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './../NavBar/NavBar';
import AboutUs from './../AboutUs/AboutUs';
import OurServices from './../OurServices/OurServices';
import Gallery from './../Gallery/Gallery';
import Event from './../Events/Event';
import Clients from './../Clients/Clients';
import Form from './../Form/Form';
import Footer from './../Footer/Footer';

function Home() {
  return (
    <>
      <NavBar />
      <AboutUs />
      <OurServices />
      <Gallery />
      <Event />
      <Clients />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
