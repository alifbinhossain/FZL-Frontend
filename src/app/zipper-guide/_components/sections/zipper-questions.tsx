import React from 'react';
import SectionContainer from '../section-container';
import SectionTitle from '../section-title';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faq = [
  {
    question: 'When making an enclosure, is it best to use #10 or #5 zippers?',
    answer:
      '#10 zippers are typically best for enclosures. #5 zippers are smaller and typically used in cushions or seating applications.',
  },
  {
    question: 'Should I use zippers with metal or plastic sliders?',
    answer:
      'Metal sliders are better suited for environments where high resistance to water and corrosion is not needed. Plastic sliders are ideal for marine conditions as they’re rust resistant.',
  },
  {
    question:
      'What is the difference between YKK VISLON  and YKK ZIPLON zippers?',
    answer:
      'VISLON® (“teeth”) zippers are stiffer and better for straight applications. ZIPLON® (“coil”) zippers are more flexible, which makes them great for curved applications.',
  },
  {
    question:
      'What is the difference between an auto-locking and a non-locking zipper slider?',
    answer:
      'An auto-lock slider is like the one you’d find on a jacket (the slider stays in place where you leave it). A non-lock slider does not lock in place on the chain.',
  },
  {
    question: 'What is the best kind of zipper for saltwater applications?',
    answer:
      'Zippers with plastic sliders are best for saltwater conditions as they do not corrode or rust.',
  },
  {
    question: 'Are zippers repairable?',
    answer:
      'Yes. Zipper sliders, top stops, and bottom stops can all be replaced easily (all can be found in our Zipper section).',
  },
];

const ZipperQuestions = () => {
  return (
    <SectionContainer id='common-zipper-questions'>
      <SectionTitle title='Some Common Zipper Questions' />

      <Accordion type='single' collapsible className='w-full'>
        {faq.map((item, index) => (
          <AccordionItem key={index} value={item.question}>
            <AccordionTrigger className='text-lg'>
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className='text-base'>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionContainer>
  );
};

export default ZipperQuestions;
