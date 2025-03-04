import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-green-50 min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <img
          src="https://i.postimg.cc/cJrKRjGq/pixelcut-export.png"
          alt="Bishnoi Temple"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white md:w-1/2 text-center md:text-left">
         <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
  WELCOME TO <span className="text-orange-500">BISHNOITODAY.IN</span>
</h1>

          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
            Join hands to uplift our community together
          </p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition-colors shadow-lg">
            Get Started
          </button>
        </div>
        
        <div className="md:w-1/3 mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
            alt="Spiritual Leader"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;