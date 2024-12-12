import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ITestingEquipment } from '@/types';
import Image from 'next/image';

const TestingEquipmentCard: React.FC<{ data: ITestingEquipment }> = ({
  data,
}) => {
  return (
    <Card className='bg-white'>
      <CardHeader>
        <div className=' relative w-full aspect-video'>
          <Image
            className='object-cover'
            fill
            src={data.image}
            alt={data.title}
          />
        </div>
      </CardHeader>
      <CardContent className='space-y-2'>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default TestingEquipmentCard;
