'use client'

import React, { useState } from 'react';
import assetsImg from '@/public/images/assets.png'; 
import privateImg from '@/public/images/private.png';
import realEstateImg from '@/public/images/realestate.png';
import floorImg from '@/public/images/floor.png';
import Image from 'next/image';

const ServicesAndExpertise = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Services Section */}
      <div className="services-expertise-section py-12 md:py-48" style={{ background: '#181E2D', height: 'auto' }}>
        <div className="container mx-auto">
          <div className="text-white text-3xl text-center md:text-left">
            <span className="font-bold">Our </span>
            <span className="font-bold text-white">Services</span>
            <span className="font-normal"> & </span>
            <span className="font-normal" style={{ color: '#E95A0C' }}>Expertise</span>
          </div>

          <div className="flex justify-center md:justify-end mt-2">
            <div className="text-white text-lg text-center md:text-right mt-4 md:mt-8 max-w-[500px]">
              Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise.
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-12">
            {/* Left Side Text */}
            <div className="text-left w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-white text-4xl leading-relaxed text-center md:text-left">
                What<br />
                <span className="font-bold">problem</span><br />
                can we solve<br />
                <span style={{ color: '#E95A0C' }}>together?</span>
              </h2>
            </div>

            {/* Right Side Cards */}
            <div className="flex flex-col md:flex-row justify-between w-full md:w-1/2 space-y-4 md:space-y-0 md:space-x-4">
              {/* Card 1 */}
              <div className="bg-white p-4 shadow-md w-full md:w-1/3">
                <Image 
                  src={assetsImg} 
                  alt="Assets Management" 
                  width={150} 
                  height={100} 
                  className="object-cover rounded-t-lg" 
                />
                <h3 className="font-bold text-xl mt-4">Assets Management</h3>
                <p className="mt-2">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.</p>
                <a href="#" className="text-orange-600 mt-2 block">Learn More..</a>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 shadow-md w-full md:w-1/3">
                <Image 
                  src={privateImg} 
                  alt="Private Equity & IB" 
                  width={150} 
                  height={100} 
                  className="object-cover rounded-t-lg" 
                />
                <h3 className="font-bold text-xl mt-4">Private Equity & IB</h3>
                <p className="mt-2">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.</p>
                <a href="#" className="text-orange-600 mt-2 block">Learn More..</a>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 shadow-md w-full md:w-1/3">
                <Image 
                  src={realEstateImg} 
                  alt="Real Estate Investments" 
                  width={150} 
                  height={100} 
                  className="object-cover rounded-t-lg" 
                />
                <h3 className="font-bold text-xl mt-4">Real Estate Investments</h3>
                <p className="mt-2">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.</p>
                <a href="#" className="text-orange-600 mt-2 block">Learn More..</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-center py-1" style={{ background: '#181E2D' }}>
        <div className="container mx-auto">
          <div className="relative" style={{ marginTop: '-100px' }}>
            <Image 
              src={floorImg} 
              alt="Footer Floor Image" 
              layout="responsive" 
              width={500} 
              height={10}  
              objectFit="cover" 
              className={`w-full h-auto ${isHovered ? 'animate-none' : 'animate-move'}`} 
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)} 
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default ServicesAndExpertise;
