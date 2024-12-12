import { cn } from '@/lib/utils';
import { ISafetyAndRegulation } from '@/types';
import Image from 'next/image';
import React from 'react';

const SafetyCard: React.FC<{ data: ISafetyAndRegulation; index: number }> = ({
  data,
  index,
}) => {
  return (
    <div
      className={cn(
        'flex gap-10 items-center',
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      )}
    >
      <div>
        <Image src={data.image} alt={'Image'} width={500} height={500} />
      </div>

      <div className='flex-1'>{data.content}</div>
    </div>
  );
};

export default SafetyCard;
