import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SinglePage from './Components/SinglePage/SinglePage';
import NewsPage from './Components/NewsPage/NewsPage';
import ContactForm from './Components/Contact/Contact';
import Term from './Components/Policy/Term';
import Privacy from './Components/Policy/Privacy';
import Disclaimer from './Components/Policy/Disclaimer';
import AboutUs from './Components/Policy/About';
import ShareImage from './share';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return null;
}


function App() {

  const imageUrl = 'https://plus.unsplash.com/premium_photo-1723489337930-8bdd92bba034?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8';
  const title = 'Check out this image!';
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-page" element={<SinglePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/news-page/:id" element={<NewsPage />} />
        <Route path="/term-condition" element={<Term />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Share" element={<ShareImage imageUrl={imageUrl} title={title}  />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
