import React from 'react';
import ContentTitle from '../content-title';

const Content3 = () => {
  return (
    <div className='space-y-6 '>
      <ContentTitle
        title='Color Migration:'
        description='Color migration occurs and stains the articles because the zipper tape dye reacts to the synthetic leather , the plastic-coated cloth or other unknown chemicals in polyvinyl materials, under high temperature, high pressure, high humidity and high color contrast..etc.'
      />

      <div className='text-muted-foreground'>
        <p className='text-base'>Solutions to avoid color migration:</p>
        <ul className='list-decimal pl-8'>
          <li>Insert paper between articles and zippers</li>
          <li>Color fastness treatment for the zipper</li>
          <li>Black-material zipper:</li>
        </ul>
      </div>

      <p className='text-base text-muted-foreground'>
        If you need to put a black zipper on the white pvc sheet, please
        consider using a black material zipper which is produced with black
        materials (e.g.,black yarn, monofilament, sewing thread) to avoid the
        color migration between the zipper and the connected items.
      </p>
    </div>
  );
};

export default Content3;
