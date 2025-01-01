'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button, buttonVariants } from '@/components/ui/button';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Content = () => {
  const main = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const { scroll } = ScrollTrigger.create({
      trigger: main.current,
      start: 'top+=300 center',
      end: 'bottom bottom',
      pin: '.menu',
      pinSpacing: false,
      markers: true,
    });

    scroll();
  });

  return (
    <>
      <div className='h-screen w-full bg-red-200'></div>
      <div ref={main} className=' main bg-blue-200 border p-10 flex gap-4'>
        <div className='menu w-[200px] h-fit p-10 bg-gray-50 border flex flex-col gap-2 items-center justify-center '>
          {Array.from({ length: 10 }).map((_, index) => (
            <Button
              onClick={() => {}}
              key={index}
              className={buttonVariants({})}
            >{`Section - ${index + 1}`}</Button>
          ))}
        </div>

        <div className='flex-1 space-y-4'>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              id={`section-${index + 1}`}
              className='box w-full h-[400px] bg-gray-50 border flex items-center justify-center'
            >
              <h6 className='text-3xl font-medium '>Section - {index + 1}</h6>
            </div>
          ))}
        </div>
      </div>

      <div className='h-screen w-full bg-red-200'></div>
    </>
  );
};

export default Content;
