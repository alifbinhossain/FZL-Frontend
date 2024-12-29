import React from 'react';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/images/hero.jpg')`,
      }}
      className={` relative`}
    >
      <div className='absolute inset-0  bg-gradient-to-r from-black/50 via-black/30 to-black/10 bg-blend-multiply bg-cover bg-center'></div>
      <div className='relative z-10 max-w-[1000px] p-8 md:p-32 xl:p-40 text-white space-y-4'>
        <div className='space-y-2'>
          <h6 className='text-sm font-semibold'>WHO WE ARE</h6>
          <h2 className='text-2xl lg:text-4xl font-light font-poppins leading-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            nesciunt?
          </h2>
        </div>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          quod.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sint
          nesciunt omnis aspernatur reprehenderit nisi.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut
          alias ad dolore autem esse, fugit qui veniam repudiandae eius?
        </p>
      </div>
    </section>
  );
};

export default Hero;
