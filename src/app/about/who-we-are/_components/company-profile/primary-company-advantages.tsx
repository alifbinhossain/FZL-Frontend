import Image from 'next/image';
import React from 'react';

const items = [
  'OEM Capability',
  'Large Product Line',
  'Reputation',
  'Competitive Prices',
  'Production Capacity',
  'Reliability',
  `Buyer's Specifications Accepted`,
];

const PrimaryCompanyAdvantages = () => {
  return (
    <div className='bg-primary p-10 flex gap-10'>
      <div className='h-[100px] w-[100px] relative'>
        <Image
          fill
          src={'/images/company-profile/1.png'}
          alt='Company Profile'
        />
      </div>

      <div className='flex-1 text-white '>
        <h4 className='text-2xl font-medium border-b pb-2'>
          Primary Competitive Advantages
        </h4>

        <ul className='mt-4 grid grid-cols-4 gap-x-10 gap-y-4'>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrimaryCompanyAdvantages;
