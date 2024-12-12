import React from 'react';
import SectionTitle from '../section-title';
import SectionContainer from '../section-container';

const Introduction = () => {
  return (
    <SectionContainer id='introduction-to-zippers'>
      <SectionTitle title='Introduction to Zippers' />
      <p className='leading-relaxed'>
        Zippers are one of the most elemental but revolutionary inventions. They
        drastically changed both the fabric and fashion industries. The patent
        for the first prototype of the zipper was owned by the inventor of the
        sewing machine, Elias Howe, in 1851.
        <br />
        <br />
        The standard modern zipper is weather resistant, durable, and available
        in a variety of colors, materials, and sizes. Zippers are used on many
        different items including clothing, vehicle covers, bookbags, handbags,
        and more.
      </p>
    </SectionContainer>
  );
};

export default Introduction;
