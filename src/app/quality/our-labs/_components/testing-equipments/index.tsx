import React from 'react';
import SectionTitle from '../section-title';
import data from '../../_config/testing-equipments.json';
import TestingEquipmentCard from './testing-equipment-card';

const TestingEquipments = () => {
  return (
    <div>
      <SectionTitle title='Key Testing Equipments' />

      <div className='my-12 grid grid-cols-3 gap-10'>
        {data.map((item, index) => (
          <TestingEquipmentCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TestingEquipments;
