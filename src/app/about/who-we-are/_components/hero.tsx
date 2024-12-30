import React from 'react';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/images/hero.jpg')`,
      }}
      className={`relative`}
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
          Established in 1994, Fortune Zipper Limited has earned its reputation
          as one of the leading zipper manufacturers in Bangladesh. With decades
          of expertise, we pride ourselves on delivering exceptional quality and
          innovative solutions to meet the diverse needs of our clients.
          Equipped with state-of-the-art machinery sourced from Japan, Korea,
          and Taiwan, our production processes are meticulously designed to
          ensure precision and reliability. Every product undergoes rigorous
          quality control measures, guaranteeing excellence from start to
          finish. At Fortune Zipper, our dedicated team of professionals brings
          unparalleled skill and commitment, ensuring we remain at the forefront
          of the industry, setting benchmarks for quality and customer
          satisfaction.
        </p>
      </div>
    </section>
  );
};

export default Hero;
