import PageTitle from '@/components/page-title';
import React from 'react';
import TestingCapabilities from './_components/testing-capabilities';
import TestingEquipments from './_components/testing-quipments';
import SafetyAndRegulation from './_components/safety-and-regulation';

const Page = () => {
  return (
    <div>
      <PageTitle title='Our Laboratory' />
      <div className='my-10 space-y-10'>
        <TestingCapabilities />
        <TestingEquipments />
        <SafetyAndRegulation />
      </div>
    </div>
  );
};

export default Page;
