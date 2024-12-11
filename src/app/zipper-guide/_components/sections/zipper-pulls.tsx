import React from 'react';
import SectionContainer from '../section-container';
import SectionTitle from '../section-title';

const ZipperPulls = () => {
  return (
    <SectionContainer id='zipper-pulls'>
      <SectionTitle title='Zipper Pulls' />

      <div>
        <p className='text-lg'>
          Handbags and similar products often have zipper pulls (or pull cords).
          These pulls allow you to easily use the zipper by extending the length
          of the slider. This makes it much easier to use a purse, backpack, or
          any other zipper with a slider that&apos;s too small or difficult to
          reach. We offer quality-made, easy-to-use{' '}
          <span className='font-bold text-accent'>zipper pull cords</span> for
          your next project.
        </p>
      </div>
    </SectionContainer>
  );
};

export default ZipperPulls;
