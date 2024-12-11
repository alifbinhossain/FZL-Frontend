import React from 'react';
import ContentTable from './content-table';
import Introduction from './sections/introduction';
import QuickGuide from './sections/quick-guide';
import StandardZipper from './sections/standard-zipper';
import TypesOfZippers from './sections/types-of-zippers';
import ZipperSliders from './sections/zipper-sliders';
import ZipperChains from './sections/zipper-chains';
import ZipperPulls from './sections/zipper-pulls';
import Tips from './sections/tips';
import StyleAndSize from './sections/style-and-size';
import Application from './sections/applications';
import ZippersBreak from './sections/zippers-break';
import ZipperQuestions from './sections/zipper-questions';
import FinalNotes from './sections/final-notes';

const Content = () => {
  return (
    <div className='grid grid-cols-4 gap-10'>
      <div className='col-span-1'>
        <ContentTable />
      </div>
      <div className='col-span-3 space-y-8'>
        <Introduction />
        <QuickGuide />
        <StandardZipper />
        <TypesOfZippers />
        <ZipperSliders />
        <ZipperChains />
        <ZipperPulls />
        <Tips />
        <StyleAndSize />
        <Application />
        <ZippersBreak />
        <ZipperQuestions />
        <FinalNotes />
      </div>
    </div>
  );
};

export default Content;
