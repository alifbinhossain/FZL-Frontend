import React from 'react';
import data from '../_const/sales-executives-data.json';

const Executives = () => {
  return (
    <div>
      <h2 className='text-center text-2xl lg:text-3xl font-poppins mb-8 font-light'>
        Executives
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
        {data.map((item, index) => (
          <div key={index} className='bg-gray-50 px-6 py-4 rounded-sm'>
            <h4 className='text-xl lg:text-2xl font-medium font-poppins'>
              {item.name}
            </h4>
            <h6 className='mt-1 text-muted-foreground'>{item.designation}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Executives;
