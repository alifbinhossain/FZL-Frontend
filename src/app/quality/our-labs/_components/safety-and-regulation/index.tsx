import React from 'react';
import SectionTitle from '../section-title';

import data from '../../_config/safe-and-regulation-data';
import SafetyCard from './safety-card';

const SafetyAndRegulation = () => {
  return (
    <div>
      <SectionTitle title='Safety And Regulation' />

      <div className='my-12 max-w-[1400px] space-y-10'>
        {data.map((item, index) => (
          <SafetyCard key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SafetyAndRegulation;
