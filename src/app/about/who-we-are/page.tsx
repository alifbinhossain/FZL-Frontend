import PageContainer from '@/components/page-container';
import PageTitle from '@/components/page-title';
import React from 'react';
import Hero from './_components/hero';
import CompanyProfile from './_components/company-profile';
import Directors from './_components/directors';
import Moments from './_components/moments';

const Page = () => {
  return (
    <div>
      <PageTitle title='Who We Are' />
      <PageContainer className='space-y-20'>
        <Hero />
        <CompanyProfile />
        <Directors />
        <Moments />
      </PageContainer>
    </div>
  );
};

export default Page;
