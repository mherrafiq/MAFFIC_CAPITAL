import React from 'react';
import Image from 'next/image'; // If using Next.js for images
import saudiImage from '@/public/images/saudi.png'; // Import images
import sheikhsImage from '@/public/images/sheikhs.png';
import partnersImage from '@/public/images/partners.png';

const NewsAndPortfolio = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl text-black text-center">
          The <span className="font-bold">latest news</span> and our <br />
          <span style={{ color: '#E95A0C' }} className="font-bold">portfolio companies</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-center">
          Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of crystallize another container reinvent stands. Left your viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-white p-4 border border-blue-200 shadow-md rounded-lg">
            <div className="w-full mb-4">
              <Image 
                src={saudiImage} // Use the imported image
                alt="MEFIC Saudi" 
                width={444} 
                height={264} 
                className="object-cover w-full h-auto rounded-t-lg"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold">MEFIC Saudi Riyal Murabaha Fund for the period ending on 2023-12-31</h3>
            <p className="mt-2 text-gray-600">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.</p>
            <a href="#" className="mt-4 text-orange-600 block">Learn More...</a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 border border-blue-200 shadow-md rounded-lg">
            <div className="w-full mb-4">
              <Image 
                src={sheikhsImage} // Use the imported image
                alt="MEFIC MOU" 
                width={444} 
                height={264} 
                className="object-cover w-full h-auto rounded-t-lg"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold">MEFIC signs a MOU for 300 rooms with Boudl Hotels and Resorts Group</h3>
            <p className="mt-2 text-gray-600">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.</p>
            <a href="#" className="mt-4 text-orange-600 block">Learn More...</a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 border border-blue-200 shadow-md rounded-lg">
            <div className="w-full mb-4">
              <Image 
                src={partnersImage} // Use the imported image
                alt="Partnership" 
                width={444} 
                height={264} 
                className="object-cover w-full h-auto rounded-t-lg"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold">Partnership: The first Saudi investment fund to finance film</h3>
            <p className="mt-2 text-gray-600">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.</p>
            <a href="#" className="mt-4 text-orange-600 block">Learn More...</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndPortfolio;
