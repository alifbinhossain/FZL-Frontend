import React from 'react';
import Director from './_components/director';
import { Separator } from '@/components/ui/separator';
import PageTitle from '@/components/page-title';
import Managers from './_components/managers';
import Executives from './_components/executives';

const Page = () => {
  return (
    <div>
      <PageTitle title='Sales Team' />
      <div className='my-10  max-w-[1400px] mx-auto'>
        <Director />
        <Separator className='mt-20 mb-10' />
        <Managers />
        <Separator className='mt-20 mb-10' />
        <Executives />
      </div>
    </div>
  );
};

export default Page;
