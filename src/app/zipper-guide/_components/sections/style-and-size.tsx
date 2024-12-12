import React from 'react';
import SectionContainer from '../section-container';
import SectionTitle from '../section-title';
import Image from 'next/image';

const StyleAndSize = () => {
  return (
    <SectionContainer id='ykk-sizes-and-styles'>
      <SectionTitle title='YKK Zipper Sizes and Styles: How to Read YKK Product Numbers' />

      <p>
        <span className='font-bold text-accent'>YKK</span> is the world’s
        largest supplier of quality zippers as well as other fastening products.
        Because their products are so ubiquitous, it’s useful to know how to
        read their product names, which includes YKK zipper sizes and features.
        <br />
        <br />
        YKK zippers and sliders are named based on a certain set of criteria.
        <span className='font-bold text-accent'> Item #280085</span>, for
        example, is listed as{' '}
        <span className='font-bold'>
          YKK®VISLON® #8 Separating Zipper Automatic Lock Short Single Pull
          Metal Slider #VFUVOL-86 DA E 5/8” 60&quot; Black.
        </span>
      </p>

      <div>
        <h6 className='text-lg'>Here’s what that means:</h6>

        <div className='flex justify-center my-4'>
          <Image
            height={800}
            width={800}
            src={'/images/ykk-zipper-sizes.webp'}
            alt='YKK Zipper Sizes'
          />
        </div>

        <ul className='mt-8 pl-8 list-disc space-y-2'>
          <li>
            <p className='text-base'>#8 = chain size (8mm chain width)</p>
          </li>
          <li>
            <p className='text-base'>Separating = zipper has finished ends</p>
          </li>
          <li>
            <p className='text-base'>
              Automatic Lock = slider locks in place (also called AutoLok)
            </p>
          </li>
          <li>
            <p className='text-base'>
              Short Single Pull Metal = all descriptors for the type of slider
            </p>
          </li>
          <li>
            <p className='text-base'>VF = VISLON®</p>
          </li>
          <li>
            <p className='text-base'>U = reversible automatic lock</p>
          </li>
          <li>
            <p className='text-base'>V = black nickel</p>
          </li>
          <li>
            <p className='text-base'>OL = open-end left insert</p>
          </li>
          <li>
            <p className='text-base'>A = another reference to automatic lock</p>
          </li>
          <li>
            <p className='text-base'>E = enamel</p>
          </li>
          <li>
            <p className='text-base'>
              5/8” = width of tape on either side of the chain
            </p>
          </li>
          <li>
            <p className='text-base'>60” = total roll length</p>
          </li>
          <li>
            <p className='text-base'>Black = color</p>
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
};

export default StyleAndSize;
