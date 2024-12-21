import Image from 'next/image';
import React from 'react';
import Content from './_components/content';
import PageTitle from '@/components/page-title';
import PageContainer from '@/components/page-container';

const Page = () => {
  return (
    <div>
      <PageTitle title='A Guide to Zipper' />
      <PageContainer>
        <div className='my-6 lg:my-10 aspect-video lg:aspect-auto lg:h-[600px] w-full relative'>
          <Image
            className='object-cover'
            fill
            src={'/images/a-guide-to-zipper.webp'}
            alt='A Guide to Zipper'
          />
        </div>
        <Content />
      </PageContainer>
    </div>
  );
};

export default Page;
