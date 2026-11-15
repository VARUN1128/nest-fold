import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';
import { ProductDetails } from './pages/ProductDetails';
import { OurCraft } from './pages/OurCraft';
import { Accessories } from './pages/Accessories';
import { Journal } from './pages/Journal';
import { JournalArticle } from './pages/JournalArticle';
import { EarlyAccess } from './pages/EarlyAccess';
import { Admin } from './pages/Admin';

// Scroll to top helper on route transitions
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F5EFE4] text-[#2A2420]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/:slug" element={<ProductDetails />} />
            <Route path="/our-craft" element={<OurCraft />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalArticle />} />
            <Route path="/early-access" element={<EarlyAccess />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
