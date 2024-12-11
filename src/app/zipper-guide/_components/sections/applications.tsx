import React from 'react';
import SectionContainer from '../section-container';
import SectionTitle from '../section-title';

const Application = () => {
  return (
    <SectionContainer id='applications-based-on-zippers'>
      <SectionTitle title='Applications Based On Zippers' />

      <div>
        <p className='text-lg'>
          The zippers and parts outlined above can all be used in custom
          projects or for zipper replacements and repair.
          <br />
          <br />
          For industrial purposes, plastic zipper chains and sliders with
          polyester tape are generally the most stable. Plastic is lightweight,
          corrosion resistant, and weather stable while polyester offers high
          strength and low stretch. However, choosing the right zipper will
          depend on your specific application.
        </p>

        <br />
        <br />
        <p className='italic text-lg'>
          The following is a basic guide and is not intended to be a
          comprehensive list:
        </p>

        <ul className='mt-2 list-disc space-y-2 pl-8'>
          <li>
            <p>
              <span className='font-bold'>ZIPLON® (coil)</span> = curved
              applications (marine enclosure panels, “smile” curtains, tents)
            </p>
          </li>
          <li>
            <p>
              <span className='font-bold'>Plastic </span> = marine, saltwater,
              outdoor settings (awnings, boat covers)
            </p>
          </li>
          <li>
            <p>
              <span className='font-bold'>Metal </span> = applications that
              don’t encounter extended exposure to the outdoors (apparel and
              fashion, bags)
            </p>
          </li>
          <li>
            <p>
              <span className='font-bold'>Concealed zippers </span> = uses where
              aesthetic is important (apparel and fashion, bags, decorative
              pillows and cushions)
            </p>
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
};

export default Application;
