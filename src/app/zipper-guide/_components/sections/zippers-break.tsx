import React from 'react';
import SectionContainer from '../section-container';
import SectionTitle from '../section-title';

const ZippersBreak = () => {
  return (
    <SectionContainer id='common-reasons-zippers-break'>
      <SectionTitle title='How Do Zippers Break?' />

      <p className='text-lg'>
        Almost everyone has experienced the unfortunate event of a zipper
        breaking while zipping or unzipping it. There are a few common reasons
        why a zipper may break.
        <br />
        <br />
        Zipper is stuck: If your zipper is stuck, there is a good chance that
        there is something blocking the slider from moving. Fabric or loose
        threads are common reasons why a zipper gets stuck. You can use a zipper
        lubricant (like{' '}
        <span className='font-bold text-accent'>
          IOSSO® E-Z Snap, Zipzap,
        </span>{' '}
        or <span className='font-bold text-accent'>YKK® ZIPPY COOL®</span>) to
        lubricate the slider and free your zipper.
        <br />
        Zipper will not close or keeps popping up: The zipper may have a thread
        or cloth stuck in it, crooked teeth, or the slider may be broken. If
        fixing the teeth or freeing the zipper does not work, you may need to
        replace the zipper.
        <br />
        <br />
        Slider pulls off: If the slider is coming off, you should replace it
        with a new one. Make sure to choose a slider that is the correct size
        for your zipper and its teeth.
      </p>
    </SectionContainer>
  );
};

export default ZippersBreak;
