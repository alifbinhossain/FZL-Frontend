import BrandLogo from '@/components/brand-logo';
import React from 'react';
import NavMenu from '../nav-menu/index.';

const DesktopNavbar = () => {
  return (
    <aside className='flex-[0_0_300px] border-r p-8 flex flex-col gap-12'>
      <BrandLogo />
      <div>
        <NavMenu />
      </div>
    </aside>
  );
};

export default DesktopNavbar;
