import React from 'react';
import SectionContainer from '../section-container';
import SectionTitle from '../section-title';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

const ZipperChains = () => {
  return (
    <SectionContainer id='zipper-chains'>
      <SectionTitle title='Zipper Chains' />

      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-lg'>
            Zipper Chain Options
          </AccordionTrigger>
          <AccordionContent>
            <ul className='list-disc space-y-6 pl-8'>
              <li>
                <h6 className='text-lg'>
                  A{' '}
                  <span className='font-bold'>
                    continuous zipper, or plain zipper chain
                  </span>
                  , has no finished end, which makes it the most modifiable.
                  It’s great for bags, pillows, tents, and custom projects.
                </h6>

                <div className='flex justify-center my-4'>
                  <Image
                    height={500}
                    width={500}
                    src={'/images/continuos-zipper.webp'}
                    alt='Plain Zipper'
                  />
                </div>
              </li>
              <li>
                <h6 className='text-lg'>
                  A{' '}
                  <span className='font-bold'>
                    finished, closed, or separating zipper
                  </span>
                  is finished at either end to stop the slider. The two ends
                  separate at the end, making them ready-made for jackets and
                  enclosures.
                </h6>

                <div className='flex justify-center my-4'>
                  <Image
                    height={500}
                    width={500}
                    src={'/images/closed-zipper.webp'}
                    alt='Closed Zipper'
                  />
                </div>
              </li>
              <li>
                <h6 className='text-lg'>
                  Either side of the zipper end comes in
                  <span className='font-bold'>closed or open varieties.</span>
                </h6>

                <div className='flex justify-center my-4'>
                  <Image
                    height={500}
                    width={1000}
                    src={'/images/structure-zipper.webp'}
                    alt='Structure Zipper'
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

export default ZipperChains;
