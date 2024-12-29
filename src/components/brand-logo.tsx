import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BrandLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <Link onClick={onClick} href='/'>
      <div className='w-[80px] lg:w-full relative aspect-video'>
        <Image
          className='object-contain'
          src='/brand-logo.png'
          alt='logo'
          fill
        />
      </div>
    </Link>
  );
};

export default BrandLogo;
