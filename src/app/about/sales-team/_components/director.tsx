import Image from 'next/image';
import React from 'react';

const Director = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
      <Image
        width={400}
        height={400}
        src={'/human-placeholder.jpg'}
        alt='Habib Chowdhury'
      />

      <div className='max-w-[680px]'>
        <h2 className='text-3xl font-medium font-poppins'>Habib Chowdhury</h2>
        <p className='text-lg text-muted-foreground'>
          <span>Director</span>
          <br />
          <span>Sales & Marketing</span>

          <blockquote className='text-lg mt-8 text-pretty italic'>
            &#x0022;The success of any sales and marketing effort is rooted in
            collaboration and shared purpose. Our team thrives on a culture of
            creativity, innovation, and relentless drive. We believe in
            empowering each other to think boldly, act decisively, and
            continuously push boundaries. Together, we are not just meeting
            targets – we are redefining what’s possible for our brand and our
            customers.&#x0022;
          </blockquote>
        </p>
      </div>
    </div>
  );
};

export default Director;
