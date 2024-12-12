import Image from 'next/image';
import React from 'react';
import Content from './_components/content';
import PageTitle from '@/components/page-title';

const Page = () => {
  return (
    <div>
      <PageTitle title='A Guide to Zipper' />
      <div className='my-6 lg:my-10 aspect-video lg:aspect-auto lg:h-[600px] w-full relative'>
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
