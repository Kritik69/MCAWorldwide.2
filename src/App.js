import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import ContactUsPage from './Components/ContactUsPage/ContactUsPage';
import GalleryPage from './Components/GalleryPage/GalleryPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/contactus' element={<ContactUsPage />} />
          <Route path='/gallerypage' element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
