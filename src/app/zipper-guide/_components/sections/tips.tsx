import React from 'react';
import SectionContainer from '../section-container';
import SectionTitle from '../section-title';

const Tips = () => {
  return (
    <SectionContainer id='tips-of-the-trade'>
      <SectionTitle title='Tips of the Trade' />

      <ul className='pl-8 list-disc space-y-4'>
        <li>
          Plastic zippers cannot be repaired if a tooth breaks off while metal
          ones can. However, plastic zippers typically last longer and are more
          resistant to dirt, corrosion, and UV rays.
        </li>
        <li>
          For sticky zippers, try applying a{' '}
          <span className='font-bold text-accent'>
            zipper cleaner and lubricant
          </span>
          .
        </li>
        <li>
          Before sewing on the zipper, apply{' '}
          <span className='font-bold text-accent'>seam tape</span> to the fabric
          to hold in place.
        </li>
        <li>
          The larger the radius of the zipper tape, the less chance there is of
          puckering.
        </li>
      </ul>
    </SectionContainer>
  );
};

export default Tips;
