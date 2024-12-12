import { cn } from '@/lib/utils';
import React from 'react';

const PageTitle: React.FC<{ title: string; className?: string }> = ({
  className,
  title,
}) => {
  return (
    <h1
      className={cn(
        'text-2xl lg:text-4xl font-light font-poppins tracking-wide text-center capitalize bg-secondary py-4 lg:py-6',
        className
      )}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
