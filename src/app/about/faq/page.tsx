import PageTitle from '@/components/page-title';
import React from 'react';
import TradeKnowledge from './_components/trade-knowledge';
import ZipperKnowledge from './_components/zipper-knowledge';
import PageContainer from '@/components/page-container';

const Page = () => {
  return (
    <div>
      <PageTitle title='Frequently Asked Questions' />

      <PageContainer className='space-y-10'>
        <TradeKnowledge />
        <ZipperKnowledge />
      </PageContainer>
    </div>
  );
};

export default Page;
