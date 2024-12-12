import Link from 'next/link';
import React from 'react';

const BrandLogo = () => {
  return (
    <Link href='/'>
      <h2 className='text-4xl font-bold text-primary'>FZL</h2>
    </Link>
  );
};

export default BrandLogo;
