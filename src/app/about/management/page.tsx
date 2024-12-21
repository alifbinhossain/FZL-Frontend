import React from 'react';
import PageTitle from '@/components/page-title';
import data from './_config/management.json';
import ManagementCard from './_components/management-card';
import PageContainer from '@/components/page-container';

const Page = () => {
  return (
    <div>
      <PageTitle title='Management' />

      <PageContainer className='space-y-20'>
        {data.map((item, index) => (
          <ManagementCard key={index} data={item} index={index} />
        ))}
      </PageContainer>
    </div>
  );
};

export default Page;
