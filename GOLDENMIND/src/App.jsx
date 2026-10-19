import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import BookingModal from './components/BookingModal.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Conditions from './pages/Conditions.jsx';
import Telehealth from './pages/Telehealth.jsx';
import Patients from './pages/Patients.jsx';
import Contact from './pages/Contact.jsx';
export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPreset, setBookingPreset] = useState(null);
  const location = useLocation();

  // Automatically scroll to the top whenever the user navigates to a new page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleOpenBooking = (preset = null) => {
    setBookingPreset(preset);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F8FAF9] text-slate-800 pb-20 lg:pb-0">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
          <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
          <Route path="/services" element={<Services onOpenBooking={handleOpenBooking} />} />
          <Route path="/conditions" element={<Conditions onOpenBooking={handleOpenBooking} />} />
          <Route path="/telehealth" element={<Telehealth onOpenBooking={handleOpenBooking} />} />
          <Route path="/patients" element={<Patients onOpenBooking={handleOpenBooking} />} />
          <Route path="/contact" element={<Contact onOpenBooking={handleOpenBooking} />} />
          {/* Fallback route redirects any unknown URL to Home */}
          <Route path="*" element={<Home onOpenBooking={handleOpenBooking} />} />
        </Routes>
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preset={bookingPreset}
      />
    </div>
  );
}
