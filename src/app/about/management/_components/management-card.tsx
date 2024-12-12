import { cn } from '@/lib/utils';
import { IManagement } from '@/types';
import Image from 'next/image';
import React from 'react';

const ManagementCard: React.FC<{ data: IManagement; index: number }> = ({
  data,
  index,
}) => {
  return (
    <div
      className={cn(
        'flex gap-10',
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      )}
    >
      <div className='relative h-[400px] aspect-square'>
        <Image
          fill
          //   src={'/human-placeholder.jpg'}
          src={data.image}
          alt={`${data.name}'s image`}
        />
      </div>

      <div className='flex-1'>
        <h4 className='text-3xl font-medium font-poppins'>{data.name}</h4>
        <h6 className='mt-2 text-muted-foreground'>{data.designation}</h6>
        <blockquote className='text-lg mt-8 text-pretty italic'>
          &#x0022;{data.quote}&#x0022;
        </blockquote>
      </div>
    </div>
  );
};

export default ManagementCard;
