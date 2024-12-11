import React from 'react';
import Navbar from './navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row'>
      <Navbar />
      <div className='flex-1 p-10'>{children}</div>
    </div>
  );
};

export default Layout;
