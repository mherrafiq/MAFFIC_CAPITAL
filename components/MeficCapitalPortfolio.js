'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import merasImg from '@/public/images/meras.png';
import mefficImg from '@/public/images/meffic.png';
import drnelImg from '@/public/images/drnel.png';
import karamImg from '@/public/images/karam.png';
import sultanImg from '@/public/images/sultan.png';
import bodyImg from '@/public/images/body.png';

const MeficCapitalPortfolio = () => {
  const [activeLabel, setActiveLabel] = useState('All'); // Track the active label

  // Array of image data
  const images = [
    { src: merasImg, alt: 'Meras' },
    { src: mefficImg, alt: 'Meffic' },
    { src: drnelImg, alt: 'Dr. Nel' },
    { src: karamImg, alt: 'Karam' },
    { src: sultanImg, alt: 'Sultan' },
    { src: bodyImg, alt: 'Body' },
  ];

  return (
    <section className="py-20 bg-white min-h-[700px]">
      <div className="text-center">
        {/* Heading */}
        <h3 className="text-4xl font-bold relative inline-block mb-4">
          <span className="text-[#001B2E] py-1 px-3">MEFIC Capital</span>
          <span className="text-[#E95A0C] py-1 px-0">Portfolio</span>
          <span className="absolute inset-x-0 bottom-[-8px] w-1/2 mx-auto h-1 bg-black transform rounded-full" />
        </h3>

        {/* Centered Text */}
        <p className="mt-4 text-gray-800 w-1/2 mx-auto">
          Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of crystallize another container reinvent stands.
        </p>

        {/* Labels */}
        <div className="flex justify-center mt-6">
          {['All', 'Real-Estate', 'Equity Funds'].map((label) => (
            <button
              key={label}
              className={`mx-2 py-2 px-4 ${
                activeLabel === label ? 'bg-[#E95A0C] text-white underline' : 'bg-white text-black'
              }`}
              onClick={() => setActiveLabel(label)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Image display for 'All' label */}
        {activeLabel === 'All' && (
          <div className="flex justify-center items-center gap-4 mt-8 flex-wrap">
            {images.map((image, index) => (
              <div key={index} className="bg-white p-2 shadow-md w-40 h-40 flex-shrink-0">
                <Image src={image.src} alt={image.alt} layout="responsive" width={100} height={100} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MeficCapitalPortfolio;
