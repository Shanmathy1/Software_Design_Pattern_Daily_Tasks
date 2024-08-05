// import React from 'react'

// import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
//   } from "@/components/ui/avatar"
// const Topbar = () => {
//   return (
//     <div className='h-[8vh] w-full  flex justify-end items-end bg-white'>
//       <div  className='90% flex items-end justify-end gap-4'>
//       <Avatar>
//         <AvatarImage src="https://github.com/shadcn.png" />
//         <AvatarFallback>CN</AvatarFallback>
//         </Avatar>


//       </div>
//     </div>
//   )
// }

// export default Topbar

// import React from 'react';
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from '@/components/ui/avatar';

// const Topbar = () => {
//   return (
//     <div className='h-[8vh] w-full flex justify-end items-end bg-white'>
//       <div className='90% flex items-end justify-end gap-4'>
//         <Avatar>
//           <AvatarImage src="https://cdn-icons-png.freepik.com/512/16950/16950900.png" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//       </div>
//     </div>
//   );
// };

// export default Topbar;




// import React from 'react';
// import { Layers } from 'lucide-react';
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from '@/components/ui/avatar';

// const Topbar = () => {
//   return (
//     <div className='h-[8vh] w-full flex justify-end items-center bg-white px-4'>
//       <div className='flex items-center gap-4'>
//         <Avatar className='w-12 h-12'>
//           <AvatarImage src="https://cdn-icons-png.freepik.com/512/16950/16950900.png" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//       </div>
//     </div>
//   );
// };

// export default Topbar;



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
          <AvatarImage src="https://cdn1.iconfinder.com/data/icons/avatars-and-biometry-data/154/online-status-web-person-avatar-512.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Topbar;
