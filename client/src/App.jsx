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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
