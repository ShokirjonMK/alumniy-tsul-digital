import React from 'react';
import { TbMenu2 } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { IconComponent } from '../components';
import { privateRoutes } from '../routes';

const Sidebar: React.FC = (): React.JSX.Element => {
  const { pathname } = useLocation();

  return (
    <div className="fixed h-screen top-0 w-[260px] left-0 bg-slate-800 text-white">
      <div className="flex-between h-[60px] text-blue-500 text-2xl font-bold border-b border-blue-500/20 px-4">
        <h1>Alumni</h1>
        <TbMenu2 className='cursor-pointer' />
      </div>
      <div className="flex flex-col gap-2 px-2 py-4 text-slate-300">
        {
          privateRoutes?.map(route => (
            <Link to={route.path} className={`d-f gap-2 px-4 py-2 rounded-xl ${pathname === route.path ? "bg-slate-100/10 text-blue-500 font-bold" : "font-light"}`} >
              {IconComponent(route.icon)}
              {route.title}
            </Link>
          ))
        }
      </div>
    </div >
  );
};

export default Sidebar;