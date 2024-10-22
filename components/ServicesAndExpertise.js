'use client'

import React, { useState } from 'react';
import assetsImg from '@/public/images/assets.png'; 
import privateImg from '@/public/images/private.png';
import realEstateImg from '@/public/images/realestate.png';
import floorImg from '@/public/images/floor.png'; 
import Image from 'next/image';

const ServicesAndExpertise = () => {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover

  return (
    <>
      {/* Services Section */}
      <div className="services-expertise-section py-48" style={{ background: '#181E2D', minHeight: '790px' }}>
        <div className="container mx-auto px-4 md:px-0">
          {/* Heading and Description */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-white text-center md:text-left text-3xl md:text-4xl">
              <span className="font-bold">Our </span>
              <span className="font-bold text-white">Services</span>
              <span className="font-normal"> & </span>
              <span className="font-normal" style={{ color: '#E95A0C' }}>Expertise</span>
            </div>

            <div className="text-white text-lg max-w-lg text-center md:text-left">
              Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped.
            </div>
          </div>

          {/* Problem Section */}
          <div className="mt-12 md:mt-24 text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl leading-relaxed">
              What<br />
              <span className="font-bold">problem</span><br />
              can we solve<br />
              <span style={{ color: '#E95A0C' }}>together?</span>
            </h2>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <Image 
                src={assetsImg} 
                alt="Assets Management" 
                width={150} 
                height={100} 
                className="object-cover rounded-t-lg" 
              />
              <h3 className="font-bold text-xl mt-4">Assets Management</h3>
              <p className="mt-2">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</p>
              <a href="#" className="text-orange-600 mt-2 block">Learn More..</a>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <Image 
                src={privateImg} 
                alt="Private Equity & IB" 
                width={150} 
                height={100} 
                className="object-cover rounded-t-lg" 
              />
              <h3 className="font-bold text-xl mt-4">Private Equity & IB</h3>
              <p className="mt-2">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</p>
              <a href="#" className="text-orange-600 mt-2 block">Learn More..</a>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <Image 
                src={realEstateImg} 
                alt="Real Estate Investments" 
                width={150} 
                height={100} 
                className="object-cover rounded-t-lg" 
              />
              <h3 className="font-bold text-xl mt-4">Real Estate Investments</h3>
              <p className="mt-2">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</p>
              <a href="#" className="text-orange-600 mt-2 block">Learn More..</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-center py-1" style={{ background: '#181E2D' }}>
        <div className="container mx-auto px-4">
          <div className="relative -mt-48">
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
