import React from 'react';
import SectionContainer from '../section-container';
import SectionTitle from '../section-title';

const FinalNotes = () => {
  return (
    <SectionContainer id='final-notes'>
      <SectionTitle title='Final Notes' />

      <h6 className='text-lg font-bold'>Disclaimer:</h6>
      <p>
        The purpose of this guide is to give fabricators some general guidelines
        and product information.
        <br />
        <br />
        This guide should not be considered as the sole source of information on
        zippers. This guide is strictly informational.
      </p>
    </SectionContainer>
  );
};

export default FinalNotes;
