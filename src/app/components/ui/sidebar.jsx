import React from 'react';
import Logo from '../common/logo';
import Menu from './menu';

const Sidebar = () => {
  return (
    <>
      <div className="mb-4">
        <Logo />
      </div>
      <div>
        <Menu />
      </div>
    </>
  );
};

export default Sidebar;
