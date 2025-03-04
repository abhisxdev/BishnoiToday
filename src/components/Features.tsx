import React from 'react';
import { Users, Briefcase, Building2, GraduationCap, Award, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Users,
    title: 'Community Directory',
    description: 'Search members by name and profession',
    link: '/community-directory'
  },
  {
    icon: Briefcase,
    title: 'Job & Career',
    description: 'Browse job listings or post job opportunities',
    link: '/jobs'
  },
  {
    icon: Building2,
    title: 'Business Directory',
    description: 'Showcase businesses owned by community members',
    link: '/business'
  },
  {
    icon: GraduationCap,
    title: 'Matrimonial',
    description: 'Create and browse profiles for matchmaking',
    link: '/matrimonial'
  },
  {
    icon: Award,
    title: 'Achievers',
    description: 'Highlight notable individuals from the Bishnoi Samaj',
    link: '/achievers'
  },
  {
    icon: UserCheck,
    title: 'Mentors',
    description: 'Guidance from experienced professionals',
    link: '/mentors'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gray-600 font-medium text-lg">Empowering Our Community</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-800">
            Our Services
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-green-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group relative p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 border-2 border-green-600 overflow-hidden"
            >
              {/* Decorative background circle */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gray-50 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
              
              {/* Icon container */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white group-hover:bg-gray-50 transition-colors duration-300 border border-green-600">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Learn More link */}
                <div className="mt-6 flex items-center text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;