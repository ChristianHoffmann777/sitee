import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import PersonalCabinetPage from './pages/PersonalCabinetPage';
import PaymentPage from './pages/PaymentPage';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <div className="min-h-screen bg-slate-800">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/personal-cabinet" element={<PersonalCabinetPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
            <Footer />
            <ScrollToTop />
          </div>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;