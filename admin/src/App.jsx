import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateNews from './pages/CreateNews';
import AllNews from './pages/AllNews';
import CheckCategory from './pages/CheckCategory';
import Header from './components/Header/Header';
import CurrentNews from './pages/CurrentNews';
import { Toaster } from 'react-hot-toast';
import ManageNews from './pages/Managenews';
import Headlines from './pages/Headlines';
import EditNews from './pages/EditNews';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-news" element={<CreateNews />} />
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/check-category" element={<CheckCategory />} />
          <Route path="/see-news" element={<CurrentNews />} />
          <Route path="/manage-news" element={<ManageNews />} />
          <Route path="/Headlines" element={<Headlines />} />
          <Route path="/Edit-News/:id" element={<EditNews />} />


        </Routes>
      </div>
      <Toaster/>
    </BrowserRouter>
  );
};

export default App;
