import React from 'react';

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Decorative element */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-green-800 rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-green-800 relative">
              Our Sacred Mission
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-orange-500"></span>
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                The Bishnoi community, founded by Guru Jambheshwar Ji in 1485 AD, stands as a beacon of environmental conservation 
                and compassionate living. Our mission is to preserve and promote the 29 principles (Bishnoi) that form the 
                cornerstone of our community's values.
              </p>
              
              <p className="text-lg font-medium text-green-800">We are committed to:</p>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Protecting nature and wildlife",
                  "Promoting sustainable living practices",
                  "Preserving our rich cultural heritage",
                  "Supporting education and economic growth within our community",
                  "Fostering unity and brotherhood among all members"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  src: "https://organiser.org/wp-content/uploads/2024/10/screenshot-2024-10-22-155657-png.webp",
                  alt: "Nature Conservation",
                  className: "col-span-2"
                },
                {
                  src: "https://static.wixstatic.com/media/9618c7_168389a87c194bc58d3f90db5adbd0e2~mv2.png/v1/fill/w_568,h_340,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9618c7_168389a87c194bc58d3f90db5adbd0e2~mv2.png",
                  alt: "Cultural Heritage"
                },
                {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpfqBP86TG4Gv42s6gFRUFad4_RFxbuRaP8ZvgRKm4X0eJEjNClxwbOharx_sM3GEFuSs&usqp=CAU",
                  alt: "Education"
                }
              ].map((image, index) => (
                <div 
                  key={index} 
                  className={`relative overflow-hidden group ${image.className || ''}`}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="rounded-xl shadow-lg h-64 w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-green-900 bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;