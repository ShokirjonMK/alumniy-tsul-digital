import React, { } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { TbBuildingCommunity, TbCirclePlus, TbPencil, TbSchool } from 'react-icons/tb';

const Experience: React.FC<{ isEdit?: boolean }> = ({ isEdit = false }): React.JSX.Element => {

  return (
    <div className={`mx-auto ${!isEdit ? "max-w-[980px]" : ""}`}>
      <div className="flex flex-col gap-3">
        <h1 className='text-xl font-semibold'>Resume</h1>

        <div className="flex-between gap-4 border border-slate-200 rounded-2xl p-3">
          <FaCircleUser size={64} className="text-gray-200" />
          <div className="w-full">
            <h1 className='text-2xl font-semibold'>Palonchi Pustonchiyev Pismadonchi o'g'li</h1>
            <p className='text-slate-400 text-lg font-medium'>Yurist, Sud</p>
          </div>
          <div className="flex-center">{isEdit ? <TbPencil size={28} className='text-slate-400 cursor-pointer' /> : ""}</div>
        </div>

        <h5 className='text-lg font-medium mt-4'>Bog'lanish uchun</h5>
        <div className="flex flex-col gap-3 border border-slate-200 rounded-2xl p-3 text-base">
          <div className="">
            <p className='text-slate-400'>Telefon raqami</p>
            <b className='font-semibold'>+998 (99) 999 99 99</b>
          </div>
          <div className="">
            <p className='text-slate-400'>Elektron pochta</p>
            <b className='font-semibold'>nGk6G@example.com</b>
          </div>
          <div className="">
            <p className='text-slate-400'>Boshqa usullar</p>
            <b className='font-semibold'>https://my-info.com</b>
          </div>
        </div>

        <div className="flex-between gap-4 mt-4 text-lg font-medium">
          <h5 className=''>Ta'lim ma'lumotlari</h5>
          {isEdit && <div className="d-f gap-1 text-blue-500 text-base cursor-pointer">
            <TbCirclePlus size={24} className='cursor-pointer' />
            Qo'shish
          </div>}
        </div>
        <div className="flex flex-col gap-3 border border-slate-200 rounded-2xl p-3 text-base">
          <div className="flex-between gap-4">
            <div className="flex gap-4">
              <div className="flex-center h-10 w-10 rounded-full bg-slate-100 text-slate-400"><TbSchool size={24} /></div>
              <div className="">
                <b className='font-semibold uppercase'>Sudiyalar Oliy Maktabi</b>
                <p className='text-slate-400'>(<b>2019-2022</b>) - Jinoyat sudi</p>
              </div>
            </div>
            <div className="flex-center">{isEdit ? <TbPencil size={28} className='text-slate-400 cursor-pointer' /> : ""}</div>
          </div>
          <div className="flex-between gap-4">
            <div className="flex gap-4">
              <div className="flex-center h-10 w-10 rounded-full bg-slate-100 text-slate-400"><TbSchool size={24} /></div>
              <div className="">
                <b className='font-semibold uppercase'>Toshkent Davlar Yuridik Universiteti</b>
                <p className='text-slate-400'>(<b>2022-2024</b>) - Yuristpridensita / Jinoiy odil sudlov</p>
              </div>
            </div>
            <div className="flex-center">{isEdit ? <TbPencil size={28} className='text-slate-400 cursor-pointer' /> : ""}</div>
          </div>
        </div>

        <div className="flex-between gap-4 mt-4 text-lg font-medium">
          <h5 className=''>Ish tajribasi</h5>
          {isEdit && <div className="d-f gap-1 text-blue-500 text-base cursor-pointer">
            <TbCirclePlus size={24} className='cursor-pointer' />
            Qo'shish
          </div>}
        </div>
        <div className="flex flex-col gap-5 border border-slate-200 rounded-2xl p-3 text-base">
          <div className="flex-between gap-4">
            <div className="flex gap-4">
              <div className="flex-center h-10 w-10 rounded-full bg-slate-100 text-slate-400"><TbBuildingCommunity size={24} /></div>
              <div className="">
                <b className='font-semibold uppercase'>Yunusobod Jinoyat Sudi</b>
                <p className='text-slate-400'>(<b>2024-2025</b>) - Sud yordamchisi</p>
              </div>
            </div>
            <div className="flex-center">{isEdit ? <TbPencil size={28} className='text-slate-400 cursor-pointer' /> : ""}</div>
          </div>
          <div className="flex-between gap-4">
            <div className="flex gap-4">
              <div className="flex-center h-10 w-10 rounded-full bg-slate-100 text-slate-400"><TbBuildingCommunity size={24} /></div>
              <div className="">
                <b className='font-semibold uppercase'>Sudiyalar Oliy Maktabi</b>
                <p className='text-slate-400'>(<b>2025-hozirgacha</b>) - Jinoyat sudi</p>
              </div>
            </div>
            <div className="flex-center">{isEdit ? <TbPencil size={28} className='text-slate-400 cursor-pointer' /> : ""}</div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Experience;