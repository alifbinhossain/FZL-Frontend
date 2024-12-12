import React from 'react';
import SectionTitle from '../section-title';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionContainer from '../section-container';
import Image from 'next/image';

const ZipperSliders = () => {
  return (
    <SectionContainer id='zipper-sliders'>
      <SectionTitle title='Zipper Sliders' />

      <div>
        <h6 className='text-lg'>
          When shopping for sliders, note that there are{' '}
          <span className='font-bold'>ZIPLON®-compatible sliders</span> and{' '}
          <span className='font-bold'>VISLON®-compatible sliders</span>.
        </h6>
      </div>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-lg'>Slider Parts</AccordionTrigger>
          <AccordionContent className='text-base'>
            <ul className='list-disc pl-8 space-y-1'>
              <li>Crown (top)</li>
              <li>Puller or pull-tab</li>
              <li>Body (part that engages with zipper elements) </li>
              <li>Throats</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='text-lg'>
            Slider Options
          </AccordionTrigger>
          <AccordionContent>
            <ul className='pl-8 list-disc space-y-4'>
              <li className='space-y-1'>
                <h6 className='text-lg'>
                  <span className='font-bold'>Single Slider</span> (one per
                  zipper unit)
                </h6>

                <div className='my-4 w-full'>
                  <Image
                    height={500}
                    width={500}
                    src={'/images/single-slider.webp'}
                    alt='Single Slider'
                  />
                </div>
              </li>
              <li className='space-y-1'>
                <h6 className='text-lg'>
                  <span className='font-bold'>Double Slider</span> (two per
                  zipper unit)
                </h6>

                <div className='my-4 w-full'>
                  <Image
                    height={500}
                    width={500}
                    src={'/images/double-slider.webp'}
                    alt='Double Slider'
                  />
                </div>
              </li>
              <li className='space-y-1'>
                <h6 className='text-lg'>
                  <span className='font-bold'>
                    Autolock Slider (or AutoLok)
                  </span>
                </h6>

                <p className='text-base'>
                  This slider type stays in place where you put it. It will not
                  open the zipper chain unless you pull the slider.
                </p>
              </li>
              <li className='space-y-1'>
                <h6 className='text-lg'>
                  <span className='font-bold'>Non-Locking Slider</span>
                </h6>
                <p className='text-base'>
                  This slider has no locking mechanism to keep it from sliding.
                </p>
              </li>
              <li className='space-y-1'>
                <h6 className='text-lg'>
                  <span className='font-bold'>Round Slider</span>
                </h6>

                <div className='my-4 w-full'>
                  <Image
                    height={500}
                    width={500}
                    src={'/images/round-slider.webp'}
                    alt='Double Slider'
                  />
                </div>
              </li>
              <li className='space-y-1'>
                <h6 className='text-lg'>
                  <span className='font-bold'>Square Slider</span>
                </h6>

                <div className='my-4 w-full'>
                  <Image
                    height={500}
                    width={500}
                    src={'/images/square-slider.webp'}
                    alt='Square Slider'
                  />
                </div>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SectionContainer>
  );
};

export default ZipperSliders;
