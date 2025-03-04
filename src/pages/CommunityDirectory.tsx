import React, { useState } from 'react';
import { Search, UserPlus, MapPin, Phone, Briefcase, Calendar, Filter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for community members
const mockMembers = [
  {
    id: 1,
    name: 'Ramesh Bishnoi',
    age: 35,
    occupation: 'Software Engineer',
    location: 'Jodhpur, Rajasthan',
    phone: '+91 98765 43210',
    email: 'ramesh.bishnoi@example.com',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
    dob: '1990-05-15'
  },
  {
    id: 2,
    name: 'Sunita Bishnoi',
    age: 42,
    occupation: 'Doctor',
    location: 'Bikaner, Rajasthan',
    phone: '+91 87654 32109',
    email: 'sunita.bishnoi@example.com',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300',
    dob: '1983-11-23'
  },
  {
    id: 3,
    name: 'Vikram Bishnoi',
    age: 28,
    occupation: 'Teacher',
    location: 'Jaipur, Rajasthan',
    phone: '+91 76543 21098',
    email: 'vikram.bishnoi@example.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300',
    dob: '1997-08-10'
  },
  {
    id: 4,
    name: 'Priya Bishnoi',
    age: 31,
    occupation: 'Architect',
    location: 'Jodhpur, Rajasthan',
    phone: '+91 65432 10987',
    email: 'priya.bishnoi@example.com',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300',
    dob: '1994-03-27'
  },
  {
    id: 5,
    name: 'Mohan Bishnoi',
    age: 45,
    occupation: 'Business Owner',
    location: 'Jaisalmer, Rajasthan',
    phone: '+91 54321 09876',
    email: 'mohan.bishnoi@example.com',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300',
    dob: '1980-12-05'
  },
  {
    id: 6,
    name: 'Kavita Bishnoi',
    age: 29,
    occupation: 'Lawyer',
    location: 'Bikaner, Rajasthan',
    phone: '+91 43210 98765',
    email: 'kavita.bishnoi@example.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300',
    dob: '1996-07-18'
  }
];

const CommunityDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Filter members based on search term and location
  const filteredMembers = mockMembers.filter(member => {
    const nameMatch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = locationFilter === '' || member.location.toLowerCase().includes(locationFilter.toLowerCase());
    return nameMatch && locationMatch;
  });

  // Get unique locations for filter dropdown
  const locations = [...new Set(mockMembers.map(member => member.location.split(',')[0].trim()))];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Community Directory</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with members of the Bishnoi community. Search for people by name or location, or register yourself to join our growing network.
          </p>
          <Link 
            to="/register" 
            className="mt-6 inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-md"
          >
            <UserPlus size={20} className="mr-2" />
            Register Yourself
          </Link>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-green-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name..."
                className="pl-10 pr-4 py-3 w-full rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-green-600 hover:text-green-800 transition-colors"
              >
                <Filter size={20} className="mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select
                    className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  >
                    <option value="">All Locations</option>
                    {locations.map((location, index) => (
                      <option key={index} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                {/* Additional filters can be added here */}
              </div>
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredMembers.length}</span> of <span className="font-semibold">{mockMembers.length}</span> members
          </p>
          {searchTerm && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setLocationFilter('');
              }}
              className="text-green-600 hover:text-green-800 transition-colors font-medium"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Members Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.length > 0 ? (
              filteredMembers.map(member => (
                <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <div className="flex items-center mt-1">
                        <Briefcase size={14} className="mr-1" />
                        <span className="text-sm">{member.occupation}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2 flex-shrink-0 text-green-600" />
                        <span>{member.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone size={16} className="mr-2 flex-shrink-0 text-green-600" />
                        <span>{member.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail size={16} className="mr-2 flex-shrink-0 text-green-600" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2 flex-shrink-0 text-green-600" />
                        <span>Age: {member.age} years</span>
                      </div>
                    </div>
                    
                    <button className="mt-4 w-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors py-2 rounded-lg font-medium border border-green-100">
                      View Full Profile
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white rounded-xl shadow-sm">
                <div className="text-gray-500 mb-4">No members found matching your search criteria.</div>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setLocationFilter('');
                  }}
                  className="text-green-600 hover:text-green-800 transition-colors font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Members List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredMembers.length > 0 ? (
              filteredMembers.map(member => (
                <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 h-40 md:h-auto overflow-hidden">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-5 md:w-3/4 flex flex-col md:flex-row">
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                        <div className="flex items-center text-gray-600 mb-3">
                          <Briefcase size={16} className="mr-1 text-green-600" />
                          <span>{member.occupation}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center text-gray-600">
                            <MapPin size={16} className="mr-2 flex-shrink-0 text-green-600" />
                            <span>{member.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Phone size={16} className="mr-2 flex-shrink-0 text-green-600" />
                            <span>{member.phone}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Mail size={16} className="mr-2 flex-shrink-0 text-green-600" />
                            <span>{member.email}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar size={16} className="mr-2 flex-shrink-0 text-green-600" />
                            <span>Age: {member.age} years</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-1/3 flex items-end justify-end mt-4 md:mt-0">
                        <button className="w-full md:w-auto bg-green-50 text-green-600 hover:bg-green-100 transition-colors py-2 px-4 rounded-lg font-medium border border-green-100">
                          View Full Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <div className="text-gray-500 mb-4">No members found matching your search criteria.</div>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setLocationFilter('');
                  }}
                  className="text-green-600 hover:text-green-800 transition-colors font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Pagination */}
        {filteredMembers.length > 0 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 rounded-md bg-green-600 text-white">1</button>
              <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
              <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
              <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        )}

        {/* Join Community CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 shadow-lg text-white">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Join Our Community Directory</h3>
              <p className="text-green-100">
                Connect with other members, showcase your profile, and be part of our growing network.
              </p>
            </div>
            <Link 
              to="/register" 
              className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors shadow-md"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDirectory;