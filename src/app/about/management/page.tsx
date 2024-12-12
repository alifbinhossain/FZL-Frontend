import React from 'react';
import PageTitle from '@/components/page-title';
import data from './_config/management.json';
import ManagementCard from './_components/management-card';

const Page = () => {
  return (
    <div>
      <PageTitle title='Management' />

      <div className='my-10 space-y-20 max-w-[1400px] mx-auto'>
        {data.map((item, index) => (
          <ManagementCard key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
