import React from 'react';
import SectionTitle from './section-title';
import Image from 'next/image';

const TestingCapabilities = () => {
  return (
    <div>
      <SectionTitle title='Testing Capabilities' />
      <div className='my-4 flex justify-center'>
        <Image
          width={800}
          height={600}
          src={'/images/testing-capabilities.webp'}
          alt='Testing Capabilities'
        />
      </div>
    </div>
  );
};

export default TestingCapabilities;
