import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="experience-section py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Align text to the left and increase the font size */}
        <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-semibold">
          Our 
          <span className="font-bold text-[#E95A0C]"> Experience</span>, 
          <span className="font-bold text-[#E95A0C]"> Skills</span> <br /> &{' '}
          <span className="underline text-[#2D3C65]">Expertise</span>,{' '}
          <span className="text-[#E95A0C]">Your Profit.</span>
        </h2>

        {/* Adjust the paragraph font size and align to the left */}
        <p className="mt-6 text-left text-base sm:text-lg md:text-xl text-black max-w-[600px]">
          Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of crystallize another container reinvent stands.
        </p>

        {/* Responsive grid layout for the cards */}
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* First Card */}
          <Card
            title={
              <>
                Dramatically<br /> 
                <span className="font-normal text-xl">maintain solutions</span>
              </>
            }
            subtitle="FIRST"
            description="Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth."
          />
          {/* Second Card */}
          <Card
            title={
              <>
                Efficiently unleash<br />
                <span className="font-normal text-xl">media information</span>
              </>
            }
            subtitle="SECOND"
            description="Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth."
          />
          {/* Third Card */}
          <Card
            title={
              <>
                Quickly maximize<br />
                <span className="font-normal text-xl">timely deliverables</span>
              </>
            }
            subtitle="THIRD"
            description="Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth."
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, description }) => {
  return (
    <div className="card bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-[#E95A0C] text-lg font-semibold">{subtitle}</h3>
      <h4 className="text-2xl font-semibold text-[#2D3C65] mt-2">{title}</h4>
      <p className="text-gray-500 mt-2">{description}</p>
      <a href="#" className="text-[#E95A0C] mt-4 block">Learn More...</a>
    </div>
  );
};

export default ExperienceSection;
