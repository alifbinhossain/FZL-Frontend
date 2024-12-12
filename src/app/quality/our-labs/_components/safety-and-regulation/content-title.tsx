import React from 'react';

const ContentTitle: React.FC<{ title: string; description?: string }> = ({
  title,
  description,
}) => {
  return (
    <div>
      <h2 className='text-2xl font-semibold'>{title}</h2>
      {description && (
        <p className='text-base text-muted-foreground mt-2'>{description}</p>
      )}
    </div>
  );
};

export default ContentTitle;
