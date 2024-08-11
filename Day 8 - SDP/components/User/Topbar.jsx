import React from 'react';
import { Layers } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

const Topbar = () => {
  return (
    <div className='h-[8vh] w-full flex justify-end items-center bg-white px-4'>
      <div className='flex items-center gap-4'>
        <Avatar className='w-12 h-12'>
          <AvatarImage src="https://img.lovepik.com/element/45001/3052.png_860.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Topbar;
