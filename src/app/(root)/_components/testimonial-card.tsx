import { cn } from '@/lib/utils';
import { ITestimonial } from '@/types';
import Image from 'next/image';
import React from 'react';

const TestimonialCard: React.FC<{ item: ITestimonial; index: number }> = ({
  item,
}) => {
  return (
    <div
      className={cn('bg-gray-50 p-8 rounded-lg border w-[400px] space-y-6 m-4')}
    >
      <div>
        <Image
          src={'/quote.svg'}
          alt='Quote'
          width={30}
          height={30}
          className=''
        />
        <p className='mt-2'>{item.quote}</p>
      </div>

      <div className='flex items-center gap-4'>
        <div className='size-10 relative '>
          <Image
            className='rounded-full object-cover object-center'
            fill
            src={item.image}
            alt={item.name}
          />
        </div>

        <div>
          <h4 className='font-semibold'>{item.name}</h4>
          <p className='text-sm text-muted-foreground'>{item.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
