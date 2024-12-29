import React from 'react';
import SectionContainer from './section-container';
import SectionTitle from './section-title';
import Image from 'next/image';

const OurClients = () => {
  return (
    <SectionContainer>
      <SectionTitle
        title='Who We Work With'
        description='Brand Clients We Cooperate'
      />
      <div className='mt-6 w-full relative h-[140px]'>
        <Image
          className='object-contain'
          fill
          src={'/images/home/brand-clients.webp'}
          alt='Brand-Clients'
        />
      </div>
    </SectionContainer>
  );
};

export default OurClients;
