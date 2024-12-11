import Image from 'next/image';
import React from 'react';
import Content from './_components/content';

const Page = () => {
  return (
    <div>
      <h1 className='text-4xl font-poppins text-center capitalize'>
        A guide to Zipper
      </h1>

      <div className='my-10 h-[600px] w-full relative'>
        <Image
          className='object-cover'
          fill
          src={'/images/a-guide-to-zipper.webp'}
          alt='A Guide to Zipper'
        />
      </div>
      <Content />
    </div>
  );
};

export default Page;
