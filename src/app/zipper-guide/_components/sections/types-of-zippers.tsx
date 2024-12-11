import React from 'react';
import SectionContainer from '../section-container';
import SectionTitle from '../section-title';
import Image from 'next/image';

const TypesOfZippers = () => {
  return (
    <SectionContainer id='types-of-zippers'>
      <SectionTitle title='Types of Zippers' />

      <div>
        <h6 className='text-lg'>
          When shopping for sliders, note that there are{' '}
          <span className='font-bold'>ZIPLON®-compatible sliders</span> and{' '}
          <span className='font-bold'>VISLON®-compatible sliders</span>.
        </h6>

        <div className='mt-4 w-full flex justify-center '>
          <Image
            height={500}
            width={500}
            src={'/images/slider.webp'}
            alt='Zipper Slider'
          />
        </div>
      </div>

      <ul className='list-disc space-y-4'>
        <li>
          <h6 className='text-lg'>
            <span className='font-bold text-accent'>VISLON® Zippers</span> have
            a closure structure resembling “teeth.” They’re made of plastic
            teeth injected onto the tape. Stiffer than coil zippers (see below),
            they typically work better for straight applications.
          </h6>

          <div className='my-4 w-full flex justify-center '>
            <Image
              height={500}
              width={500}
              src={'/images/vislon-zipper.jpg'}
              alt='Vislon Zipper'
            />
          </div>
        </li>
        <li>
          <h6 className='text-lg'>
            <span className='font-bold text-accent'>ZIPLON® Zippers</span> are
            often referred to as “coil” zippers because they have a closing
            structure where the teeth resemble “coiled” plastic. This coiling
            structure allows the zipper to bend well around curves. This makes
            them great for “smile” curtains, boat covers, cushions, or U-shaped
            openings in boat enclosures.
          </h6>

          <div className='my-4 w-full flex justify-center '>
            <Image
              height={500}
              width={500}
              src={'/images/ziplon-zipper.jpg'}
              alt='Ziplon Zipper'
            />
          </div>
        </li>
        <li>
          <h6 className='text-lg'>
            <span className='font-bold'>Metal zippers</span> are commonly used
            in applications that don’t require weather capability.
          </h6>
        </li>
        <li>
          <h6 className='text-lg'>
            <span className='font-bold'>Concealed zippers</span> , also called
            “invisible zippers,” are designed so that the elements are hidden
            under the tape.
          </h6>
        </li>
      </ul>
    </SectionContainer>
  );
};

export default TypesOfZippers;
