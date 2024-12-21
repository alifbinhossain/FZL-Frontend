import React from 'react';
import Director from './_components/director';
import { Separator } from '@/components/ui/separator';
import PageTitle from '@/components/page-title';
import Managers from './_components/managers';
import Executives from './_components/executives';
import PageContainer from '@/components/page-container';

const Page = () => {
  return (
    <div>
      <PageTitle title='Sales Team' />
      <PageContainer>
        <Director />
        <Separator className='mt-20 mb-10' />
        <Managers />
        <Separator className='mt-20 mb-10' />
        <Executives />
      </PageContainer>
    </div>
  );
};

export default Page;
