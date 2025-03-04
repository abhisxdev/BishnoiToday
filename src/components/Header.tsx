import React, { useState } from 'react';
import { Mail, Phone, MapPin, Menu, X, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white shadow-md">
      {/* Top bar with gradient */}
      <div className="bg-gradient-to-r from-green-800 to-green-700 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="mailto:contact@bishnoisamaj.in" className="flex items-center hover:text-green-200 transition-colors">
                <Mail size={16} className="mr-2" />
                <span className="hidden sm:inline">contact@bishnoisamaj.in</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center hover:text-green-200 transition-colors">
                <Phone size={16} className="mr-2" />
                <span className="hidden sm:inline">+91 98765 43210</span>
              </a>
            </div>
            <div className="flex items-center hover:text-green-200 transition-colors">
              <MapPin size={16} className="mr-2" />
              <span>Rajasthan, India</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold text-green-800 hover:text-green-700 transition-colors">
              BishnoiToday<span className="text-green-600">.in</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-800 font-medium relative group py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-green-800 font-medium relative group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-green-800 font-medium relative group py-2"
            >
              Community Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/mentors"
              className="text-gray-700 hover:text-green-800 font-medium relative group py-2"
            >
              Mentors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/achievers"
              className="text-gray-700 hover:text-green-800 font-medium relative group py-2"
            >
              Achievers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/announcements"
              className="text-gray-700 hover:text-green-800 font-medium relative group py-2 flex items-center"
            >
              <Bell size={16} className="mr-1" />
              Announcements
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
              <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">New</span>
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-800 font-medium relative group py-2"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <Link
            to="/"
            className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors rounded-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors rounded-lg"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors rounded-lg"
          >
            Community Services
          </Link>
          <Link
            to="/mentors"
            className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors rounded-lg"
          >
            Mentors
          </Link>
          <Link
            to="/achievers"
            className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors rounded-lg"
          >
            Achievers
          </Link>
          <Link
            to="/announcements"
            className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors rounded-lg flex items-center"
          >
            <Bell size={16} className="mr-1" />
            Announcements
            <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">New</span>
          </Link>
          <Link
            to="/contact"
            className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors rounded-lg"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;