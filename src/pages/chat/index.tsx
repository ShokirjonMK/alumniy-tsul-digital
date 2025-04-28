import { Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { TbBuildingCommunity, TbCloudUpload, TbMoodSmile, TbSend } from 'react-icons/tb';

const Chat: React.FC = (): React.JSX.Element => {

  return (
    <div className="relative grid grid-cols-[280px_auto] h-[calc(100vh-60px)]">
      <div className="sidebar border-r border-t border-slate-200 bg-white p-2">
        <Input size='large' placeholder='Search...' className='w-full ' />
        <div className="flex flex-col gap-2 divide-y divide-slate-100 text-base py-5">
          {
            [1, 2, 3, 4]?.map(e => (
              <div className="d-f gap-4 pb-2" key={e}>
                <div className="flex-center h-10 w-10 rounded-full bg-slate-100 text-slate-400"><TbBuildingCommunity size={24} /></div>
                <div className="">
                  <b className='font-medium '>Yunusobod tuman sudi</b>
                  <p className='text-slate-400 text-sm'>{e == 2 ? "Menga resume yuboring" : e == 4 ? "Assalomu alaykum" : "online"}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="">
        <div className="header border-y border-slate-200 bg-white h-16 py-1 px-4 d-f">
          <div className="d-f gap-4">
            <div className="flex-center h-10 w-10 rounded-full bg-slate-100 text-slate-400"><TbBuildingCommunity size={24} /></div>
            <div className="">
              <b className='font-semibold uppercase'>Yunusobod tuman sudi</b>
              <p className='text-slate-400'>online</p>
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="content h-[calc(100vh-188px)] overflow-auto">

          </div>
          <div className="input bg-white border-t border-slate-200 h-16 py-1 px-4 d-f gap-3">
            <TbCloudUpload size={28} className='text-blue-500 cursor-pointer' />

            <Input size='large' placeholder='Search...' className='w-full ' />
            <TbSend size={28} className='text-blue-500 cursor-pointer' />
            <TbMoodSmile size={28} className='text-yellow-500 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;