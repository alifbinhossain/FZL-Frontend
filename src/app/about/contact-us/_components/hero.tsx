import React from 'react';
import Map from './map';
import ContactForm from './contact-form';

const Hero = () => {
  return (
    <section className='h-screen  py-20'>
      <div className=' h-full grid grid-cols-2 gap-16 '>
        <div>
          <ContactForm />
        </div>
        <div className=''>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Hero;
