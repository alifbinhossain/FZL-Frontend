import { cn } from '@/lib/utils';
import React from 'react';

const SectionTitle: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <h2
      className={cn(
        'text-3xl font-poppins bg-secondary px-6 py-3 border-b',
        className
      )}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
