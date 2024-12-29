'use client';

import { cn } from '@/lib/utils';
import { Play, Plus } from 'lucide-react';
import React, { useState } from 'react';
import LawOfResponsibility from './law-of-responsibility';
import { Button } from '@/components/ui/button';
import LawOfChange from './law-of-change';
import LawOfGivingAndHospitality from './law-of-giving-and-hospitality';

const lawsData = [
  {
    title: 'Slide 1',
    content: <LawOfResponsibility />,
    theme: 'orange',
  },
  {
    title: 'Slide 2',
    content: <LawOfChange />,
    theme: 'green',
  },
  {
    title: 'Slide 3',
    content: <LawOfGivingAndHospitality />,
    theme: 'blue',
  },
];

const Stacks = () => {
  const [currentLaw, setCurrentLaw] = useState<number | null>(null);
  return (
    <div className='absolute inset-0 bg-transparent'>
      <div className=' h-screen flex justify-end'>
        {lawsData.map((law, index) => (
          <div
            key={index}
            className={cn(currentLaw === index ? 'flex-1' : 'flex-[0_0_100px]')}
          >
            {currentLaw === index ? (
              <div className='relative size-full '>
                <Button
                  className='absolute top-10 left-10 z-50 rounded-full hover:bg-white'
                  onClick={() => {
                    if (currentLaw === 0) {
                      setCurrentLaw(null);
                    }
                    setCurrentLaw(currentLaw - 1);
                  }}
                  variant={'outline'}
                  size={'icon'}
                >
                  <Play className='size-6 rotate-180' />
                </Button>

                {law.content}
              </div>
            ) : (
              <div
                onClick={() => setCurrentLaw(index)}
                className={cn(
                  'flex flex-col justify-between items-center h-full  overflow-hidden p-10 relative',
                  {
                    'bg-orange-400': law.theme === 'orange',
                    'bg-green-400': law.theme === 'green',
                    'bg-blue-400': law.theme === 'blue',
                  }
                )}
              >
                <Plus className='size-10' />
                <div className='absolute bottom-20 left-0 z-10 w-full -rotate-90'>
                  <h4 className='text-3xl text-nowrap font-medium text-foreground '>
                    {law.title}
                  </h4>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
