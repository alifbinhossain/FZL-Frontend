import { cn } from '@/lib/utils';
import React from 'react';

const SectionTitle: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <h4
      className={cn(
        'text-xl font-medium bg-secondary py-2 px-4 border-l-4 border-accent',
        className
      )}
    >
      {title}
    </h4>
  );
};

export default SectionTitle;
