import React from 'react';
import Sidebar from './sidebar';
import Header from './header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }): React.JSX.Element => {

  return (
    <div className="">
      <Header />
      <Sidebar />
      <div className="content h-screen w-screen pl-[260px] pt-[60px] grid overflow-y-auto bg-slate-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;