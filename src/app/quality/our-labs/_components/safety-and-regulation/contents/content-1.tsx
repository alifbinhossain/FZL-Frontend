import React from 'react';
import ContentTitle from '../content-title';

const Content1 = () => {
  return (
    <div className='space-y-6'>
      <ContentTitle
        title='AZO free for dyestuff:'
        description='The dyestuff which we use is AZO free to guard the customer’s skin health. AZO has been found to be a kind of potential carcinogens.'
      />
      <ContentTitle
        title='Low lead (Pb) content:'
        description='We can produce the slider with lead less than 90ppm. Please inform us your requirement when placing order and inquiry so we can have the quality control accordingly and prevent the products from being contaminated and out of standard ppm.'
      />
    </div>
  );
};

export default Content1;
