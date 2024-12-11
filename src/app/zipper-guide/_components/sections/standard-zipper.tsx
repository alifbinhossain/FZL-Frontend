import React from 'react';
import SectionTitle from '../section-title';
import SectionContainer from '../section-container';
import Image from 'next/image';

const StandardZipper = () => {
  return (
    <SectionContainer id='standard-zipper-parts'>
      <SectionTitle title='Standard Zipper Parts' />

      <div className='relative w-full aspect-square'>
        <Image
          className='object-contain'
          fill
          src={'/images/standard-zipper-parts.webp'}
          alt='Standard Zipper'
        />
      </div>

      <ul className='list-disc space-y-2'>
        <li>
          The <span className='font-bold'>elements (or “zipper chain”)</span>{' '}
          refer to the teeth or coil that interlock with each other and run
          along the middle of the zipper.
        </li>
        <li>
          The <span className='font-bold'>slider</span> is the pulling mechanism
          that opens and closes the interlocking elements (more on slider parts
          below).
        </li>
        <li>
          The <span className='font-bold'>zipper tape</span> is the fabric
          attached to either side of the elements.
        </li>
        <li>
          <span className='font-bold'>Top and bottom stops</span> refer to the
          small pieces of metal or plastic placed at either end of the zipper to
          stop the slider from falling off the zipper chain.
        </li>

        <li>
          <span className='font-bold'>Top and bottom extensions</span> refer to
          the pieces of fabric at either end of the zipper unit.
        </li>

        <li>
          The <span className='font-bold'>insertion pin</span> is the small,
          straight piece of metal or plastic where the slider is led into the
          chain, while the <span className='font-bold'>retainer box</span> is
          the square-shaped piece that stops the slider at the end of the chain
          and holds it in place.
        </li>
      </ul>
    </SectionContainer>
  );
};

export default StandardZipper;
