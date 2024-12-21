import PageTitle from '@/components/page-title';
import React from 'react';
import TestingCapabilities from './_components/testing-capabilities';
import TestingEquipments from './_components/testing-equipments';
import SafetyAndRegulation from './_components/safety-and-regulation';
import PageContainer from '@/components/page-container';

const Page = () => {
  return (
    <div>
      <PageTitle title='Our Laboratory' />
      <PageContainer>
        <TestingCapabilities />
        <TestingEquipments />
        <SafetyAndRegulation />
      </PageContainer>
    </div>
  );
};

export default Page;
