import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Features from './components/Features';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Announcements from './pages/Announcements';
import CommunityDirectory from './pages/CommunityDirectory';
import MemberRegistration from './pages/MemberRegistration';

function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Features />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/community-directory" element={<CommunityDirectory />} />
          <Route path="/register" element={<MemberRegistration />} />
          {/* Add other routes as needed */}
        </Routes>
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;