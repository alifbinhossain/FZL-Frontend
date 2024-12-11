import React from 'react';
import SectionTitle from '../section-title';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionContainer from '../section-container';

const QuickGuide = () => {
  return (
    <SectionContainer id='quick-guide-to-zippers'>
      <SectionTitle title='Quick Guide to Zippers' />
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-lg'>
            How Do Zippers Work?
          </AccordionTrigger>
          <AccordionContent className='text-base'>
            A zipper track has a row of teeth on each side. These teeth all have
            a hook and hollow. The slide moves up and down the zipper track. The
            slide pushes the teeth together to close the zipper track. A
            high-quality zipper provides a very strong bond that is difficult to
            break without moving the slide in the opposite direction to separate
            the teeth. Zippers require all of the teeth to be exactly the same
            size for the mechanism to work correctly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Choosing the Right Zipper</AccordionTrigger>
          <AccordionContent>
            Zippers can be used just about anywhere. These fasteners make their
            way into boat covers, patio enclosures, cushions, recreational gear,
            and apparel. With so many variants, it can be difficult to decide
            which type is the best choice for a specific job.
            <br />
            <br />
            To shed some light on this, we’ve broken down and explained some of
            the most common zipper components and types below.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SectionContainer>
  );
};

export default QuickGuide;
