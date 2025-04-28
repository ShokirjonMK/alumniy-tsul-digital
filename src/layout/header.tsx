import { Dropdown } from 'antd';
import React from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { TbBellFilled, TbLogout, TbUser } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useAuth } from '../store';

const Header: React.FC = (): React.JSX.Element => {
  const { logout } = useAuth()

  return (
    <div className="fixed h-[60px] top-0 left-[260px] right-0 flex-between px-4 bg-white z-50" >
      <div className=""></div>
      <div className="d-f gap-3">
        <button className="p-2 rounded-xl outline-none border-none hover:bg-gray-50 focus:bg-gray-100 cursor-pointer">
          <TbBellFilled className='text-blue-500' size={22} />
        </button>
        <Dropdown trigger={['click']} menu={{
          items: [{
            label: <Link to="/profile">Profile</Link>,
            key: "profile",
            icon: <TbUser size={18} />
          },
          {
            label: "Logout",
            key: "logout",
            icon: <TbLogout size={18} />,
            onClick: () => {
              logout(); console.log("click");
            },
            danger: true
          }]
        }}>
          <FaCircleUser size={30} className="text-slate-300 cursor-pointer" />
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;