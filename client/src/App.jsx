import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SinglePage from './Components/SinglePage/SinglePage'
import NewsPage from './Components/NewsPage/NewsPage'
import ContactForm from './Components/Contact/Contact'

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-page' element={<SinglePage />} />
        <Route path='/Contact' element={<ContactForm />} />

        <Route path='/news-page/:headline/:id' element={<NewsPage />} />
        
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
