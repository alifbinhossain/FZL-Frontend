import React from 'react';
import data from '../_config/directors-data.json';
import Image from 'next/image';

const Directors = () => {
  return (
    <section>
      <h2 className='text-4xl text-center font-poppins font-light'>
        Board of Directors
      </h2>

      <div className='mt-6 grid grid-cols-3 gap-10'>
        {data.map((director, index) => (
          <div
            key={index}
            className='flex flex-col items-center gap-3 group relative overflow-hidden'
          >
            <div className='w-full aspect-square relative'>
              <Image
                className='object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-200 ease-in'
                fill
                src={director.image}
                alt={director.name}
              />
            </div>

            <div className=' z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-in absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black via-black/50 to-transparent space-y-1 text-white flex flex-col justify-end'>
              <h3 className='text-2xl font-poppins font-medium'>
                {director.name}
              </h3>
              <p className='text-base font-poppins font-light'>
                {director.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Directors;
