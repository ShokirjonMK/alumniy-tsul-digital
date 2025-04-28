import React, { } from 'react';
import BGProfile from "../../assets/bgprofile.jpg";
import { Button, Tabs } from 'antd';
import { TbLogout } from 'react-icons/tb';
import { useAuth } from '../../store';
import EduInfo from './Components/EduInfo';
import Experience from './Components/Experience';
import { FaCircleUser } from 'react-icons/fa6';

const Profile2: React.FC = (): React.JSX.Element => {
  const { logout } = useAuth()

  return (
    <div className="p-6">
      <div className="grid grid-cols-[420px_auto] gap-6">
        <div className="card rounded-3xl p-3">
          <div className="avatar relative pt-14">
            <img src={BGProfile} alt="" className='absolute top-0 h-36 w-full object-cover rounded-xl opacity-60 z-10' />
            <div className="relative w-max h-max rounded-full mx-auto z-20 bg-white p-2">
              <FaCircleUser size={150} className="relative text-gray-100 z-20 mx-auto" />
              {/* <img src="" alt="" /> */}
            </div>
          </div>

          <div className="text-center my-8">
            <h1 className="text-xl font-bold">Palonchiyev Pustonchi kimdur o'g'li</h1>
            <span className='text-sm'>Student</span>
          </div>
          <div className="flex flex-col gap-4 p-2 ">
            <div className="flex-between gap-2">
              <span className="font-semibold text-slate-400">Foydalanuvchi nomi:</span>
              <span >tsul_std_12090</span>
            </div>
            <div className="flex-between gap-2">
              <span className="font-semibold text-slate-400">Tug'ilgan sana:</span>
              <span >2002-06-14</span>
            </div>
            <div className="flex-between gap-2">
              <span className="font-semibold text-slate-400">Passport seriya va raqam:</span>
              <span >AC 0092876</span>
            </div>
            <div className="flex-between gap-2">
              <span className="font-semibold text-slate-400">Passport JSHIR:</span>
              <span >51406026610036</span>
            </div>
            <div className="flex-between gap-2">
              <span className="font-semibold text-slate-400">Telefon raqami:</span>
              <span >+998 (99) 999 99 99</span>
            </div>
            <Button danger block size='large' type='primary' className='mt-12' style={{ borderRadius: ".75rem" }} onClick={logout} > <TbLogout /> Chiqish</Button>
          </div>


        </div>
        <div className="card rounded-3xl px-6">
          <Tabs>
            <Tabs.TabPane key='1' tab="Ish tajribasi">
              <Experience isEdit />
            </Tabs.TabPane>
            <Tabs.TabPane key='2' tab="Talim tafsiloti" >
              <EduInfo />
            </Tabs.TabPane>
            <Tabs.TabPane key='3' tab="Qo'shimcha">

            </Tabs.TabPane>
          </Tabs>
        </div>
      </div >

    </div >
  );
};

export default Profile2;