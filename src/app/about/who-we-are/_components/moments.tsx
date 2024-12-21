import React from 'react';
import data from '../_const/moments-data.json';
import Image from 'next/image';

const Moments = () => {
  return (
    <section>
      <h2 className='text-4xl text-center font-poppins font-light'>
        FZL at a Glance
      </h2>

      <div className='mt-6 grid grid-cols-3 gap-1'>
        {data.map((item, index) => (
          <div key={index} className='w-full aspect-video relative group'>
            <Image
              className='object-cover grayscale group-hover:grayscale-0 transition-all duration-100 ease-in'
              fill
              src={item}
              alt='Image'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Moments;
