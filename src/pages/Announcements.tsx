import React from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: "Annual Bishnoi Community Conference 2025",
    date: "March 15, 2025",
    location: "Jodhpur, Rajasthan",
    time: "10:00 AM - 5:00 PM",
    description: "Join us for the annual Bishnoi Community Conference where we'll discuss community initiatives, environmental conservation efforts, and future plans. Special guest speakers include prominent community leaders and environmental activists.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    category: "Conference",
    registrationLink: "#"
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    date: "February 10, 2025",
    location: "Multiple locations across Rajasthan",
    time: "7:00 AM - 11:00 AM",
    description: "As part of our commitment to environmental conservation, we're organizing a massive tree plantation drive across multiple locations in Rajasthan. Join us in this initiative to plant over 10,000 trees in a single day.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    category: "Environmental",
    registrationLink: "#"
  },
  {
    id: 3,
    title: "Youth Leadership Workshop",
    date: "January 25, 2025",
    location: "Bikaner, Rajasthan",
    time: "9:00 AM - 4:00 PM",
    description: "A special workshop designed for young members of the Bishnoi community to develop leadership skills, understand community values, and prepare for future roles in community service.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
    category: "Workshop",
    registrationLink: "#"
  },
  {
    id: 4,
    title: "Cultural Heritage Festival",
    date: "April 5-7, 2025",
    location: "Jaisalmer, Rajasthan",
    time: "All day event",
    description: "A three-day festival celebrating the rich cultural heritage of the Bishnoi community. The event will feature traditional music, dance performances, art exhibitions, and culinary delights.",
    image: "https://images.unsplash.com/photo-1604604994333-f1b0e9471186?auto=format&fit=crop&q=80",
    category: "Festival",
    registrationLink: "#"
  },
  {
    id: 5,
    title: "Community Health Camp",
    date: "February 28, 2025",
    location: "Barmer, Rajasthan",
    time: "8:00 AM - 3:00 PM",
    description: "Free health check-up camp for all community members. Services include general health check-ups, eye examinations, dental check-ups, and health awareness sessions.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    category: "Health",
    registrationLink: "#"
  }
];

const Announcements = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Community Announcements & Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and initiatives from the Bishnoi community. Join us in our mission to preserve our heritage and protect our environment.
          </p>
        </div>

        {/* Featured Announcement */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={announcements[0].image} 
                alt={announcements[0].title}
                className="h-64 md:h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="flex items-center mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {announcements[0].category}
                </span>
                <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  Featured
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{announcements[0].title}</h2>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>{announcements[0].date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  <span>{announcements[0].location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock size={16} className="mr-2" />
                  <span>{announcements[0].time}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{announcements[0].description}</p>
              <a 
                href={announcements[0].registrationLink} 
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Register Now
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Other Announcements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {announcements.slice(1).map((announcement) => (
            <div key={announcement.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={announcement.image} 
                  alt={announcement.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {announcement.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{announcement.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{announcement.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{announcement.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 line-clamp-3">{announcement.description}</p>
                <a 
                  href={announcement.registrationLink} 
                  className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors"
                >
                  Learn More
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe to Updates */}
        <div className="mt-16 bg-green-50 rounded-xl p-8 shadow-md">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Stay Updated</h3>
            <p className="text-gray-600">Subscribe to receive notifications about upcoming events and announcements</p>
          </div>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded-l-lg border-2 border-green-200 focus:outline-none focus:border-green-600"
              />
              <button 
                type="submit" 
                className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Announcements;