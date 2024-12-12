import { cn } from '@/lib/utils';
import React from 'react';

const SectionContainer: React.FC<{
  id: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, className, children }) => {
  return (
    <div id={id} className={cn('space-y-4', className)}>
      {children}
    </div>
  );
};

export default SectionContainer;
