import React from 'react';
import FirstSection from '@/components/FirstSection'; 
import ExperienceSection from '@/components/ExperienceSection';
import ServicesAndExpertise from '@/components/ServicesAndExpertise';
import FundsTable from '@/components/FundsTable';
import NewsAndPortfolio from '@/components/NewsAndPortfolio';
import MeficCapitalPortfolio from '@/components/MeficCapitalPortfolio';
import Footer from '@/components/footer';


const Page = () => {
  return (
    <div>

      <FirstSection /> 
      <ExperienceSection />
      <ServicesAndExpertise />
      <FundsTable/>
      <NewsAndPortfolio/>
       <MeficCapitalPortfolio/>
       <Footer/>
       

    </div>
  );
};

export default Page;
