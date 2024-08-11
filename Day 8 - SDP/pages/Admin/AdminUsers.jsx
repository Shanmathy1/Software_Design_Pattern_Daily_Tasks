// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { HiCheck, HiX } from "react-icons/hi"; // Ensure you import these icons if using them
// import { Button } from "@/components/ui/button";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([
//     {
//       id: '5',
//       name: 'Sam',
//       email: 'Sam@gmail.com',
//       phone: '6374624556',
//       address: ' Engineers St',
//       companyName: 'IBM',
//       lastLogin: '2024-07-25',
//       accepted: 'pending'
//     },
//     {
//       id: '7',
//       name: 'Sananth',
//       email: 'Sananth@gmail.com',
//       phone: '9867453216',
//       address: 'Main St',
//       companyName: 'TATA',
//       lastLogin: '2024-07-24',
//       accepted: 'pending'
//     },
//     // Add more users as needed
//   ]);
  
//   const [popupUserId, setPopupUserId] = useState(null);
//   const [popupType, setPopupType] = useState('');

//   const handleAccept = (userId) => {
//     setUsers(users.map(user =>
//       user.id === userId ? { ...user, accepted: 'accepted' } : user
//     ));
//   };

//   const handleReject = (userId) => {
//     console.log(`Rejected user with ID: ${userId}`);
//     setUsers(users.map(user =>
//       user.id === userId ? { ...user, accepted: 'declined' } : user
//     ));
//     setPopupUserId(null);
//     setPopupType('');
//   };

//   const handlePopupOpen = (userId, type) => {
//     setPopupUserId(userId);
//     setPopupType(type);
//   };

//   const handleCancel = () => {
//     setPopupUserId(null);
//     setPopupType('');
//   };

//   return (
//     <div>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="font-bold text-lg text-black">Name</TableHead>
//             <TableHead className="font-bold text-lg text-black">Email</TableHead>
//             <TableHead className="font-bold text-lg text-black">Phone</TableHead>
//             <TableHead className="font-bold text-lg text-black">Address</TableHead>
//             <TableHead className="font-bold text-lg text-black">Company Name</TableHead>
//             <TableHead className="font-bold text-lg text-black">Status</TableHead>
//             {/* <TableHead>Actions</TableHead> */}
//           </TableRow>
//         </TableHeader>
//         <TableBody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
//           {users.map((user) => (
//             <TableRow key={user.id} className="relative">
//               <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</TableCell>
//               <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.email}</TableCell>
//               <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.phone}</TableCell>
//               <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.address}</TableCell>
//               <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.companyName}</TableCell>
//               <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                 {user.accepted === 'accepted' ? (
//                   <p className="text-green-500 font-semibold">Accepted</p>
//                 ) : user.accepted === 'declined' ? (
//                   <p className="text-red-500 font-semibold">Declined</p>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => handleAccept(user.id)}
//                       className="px-2 py-1 rounded-md bg-green-500 text-white hover:bg-green-600"
//                     >
//                       <HiCheck className="text-lg" />
//                     </button>
//                     <button
//                       onClick={() => handlePopupOpen(user.id, 'reject')}
//                       className="ml-2 px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
//                     >
//                       <HiX className="text-lg" />
//                     </button>
//                     {popupUserId === user.id && popupType === 'reject' && (
//                       <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-lg">
//                         <p className="text-sm text-gray-800 dark:text-gray-100">Do you want to reject {user.name}?</p>
//                         <div className="mt-2 flex space-x-2">
//                           <button
//                             onClick={() => handleReject(user.id)}
//                             className="px-2 py-1 rounded-md bg-green-500 text-white hover:bg-green-600"
//                           >
//                             Confirm
//                           </button>
//                           <button
//                             onClick={handleCancel}
//                             className="px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
//                           >
//                             Cancel
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default AdminUsers;





// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
// import { Button } from '@/components/ui/button';

// const UserManagement = () => {
//   const [userList, setUserList] = useState([
//     { id: '5', name: 'Sam', email: 'Sam@gmail.com', phone: '6374624556', address: 'Engineers St', companyName: 'IBM', lastLogin: '2024-07-25', status: 'pending' },
//     { id: '7', name: 'Sananth', email: 'Sananth@gmail.com', phone: '9867453216', address: 'Main St', companyName: 'TATA', lastLogin: '2024-07-24', status: 'pending' },
//     { id: '8', name: 'Alex', email: 'Alex@gmail.com', phone: '8123456789', address: 'Wall St', companyName: 'Google', lastLogin: '2024-07-23', status: 'pending' },
//     { id: '9', name: 'Jordan', email: 'Jordan@gmail.com', phone: '9123456789', address: 'Bay St', companyName: 'Microsoft', lastLogin: '2024-07-22', status: 'pending' },
//     { id: '10', name: 'Taylor', email: 'Taylor@gmail.com', phone: '7123456789', address: 'Oak St', companyName: 'Amazon', lastLogin: '2024-07-21', status: 'pending' },
//   ]);

//   const updateStatus = (userId, status) => {
//     setUserList(userList.map(user => (user.id === userId ? { ...user, status } : user)));
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-gray-100">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="font-semibold text-lg text-gray-100">Name</TableHead>
//             <TableHead className="font-semibold text-lg text-gray-100">Email</TableHead>
//             <TableHead className="font-semibold text-lg text-gray-100">Phone</TableHead>
//             <TableHead className="font-semibold text-lg text-gray-100">Address</TableHead>
//             <TableHead className="font-semibold text-lg text-gray-100">Company</TableHead>
//             <TableHead className="font-semibold text-lg text-gray-100">Status</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody className="bg-gray-800">
//           {userList.map(user => (
//             <TableRow key={user.id}>
//               <TableCell className="p-4 text-gray-300 bg-white">
//                 {user.name}
//               </TableCell>
//               <TableCell className="p-4 text-gray-400 bg-white">
//                 {user.email}
//               </TableCell>
//               <TableCell className="p-4 text-gray-400 bg-white">
//                 {user.phone}
//               </TableCell>
//               <TableCell className="p-4 text-gray-400 bg-white">
//                 {user.address}
//               </TableCell>
//               <TableCell className="p-4 text-gray-400 bg-white">
//                 {user.companyName}
//               </TableCell>
//               <TableCell className="p-4 text-gray-400 bg-white">
//                 {user.status === 'accepted' ? (
//                   <span className="text-green-500">Accepted</span>
//                 ) : user.status === 'declined' ? (
//                   <span className="text-red-500">Declined</span>
//                 ) : (
//                   <>
//                     <Button
//                       className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 mr-2"
//                       onClick={() => updateStatus(user.id, 'accepted')}
//                     >
//                       <FiCheckCircle />
//                     </Button>
//                     <Button
//                       className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2"
//                       onClick={() => updateStatus(user.id, 'declined')}
//                     >
//                       <FiXCircle />
//                     </Button>
//                   </>
//                 )}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default UserManagement;





// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
// import { Button } from '@/components/ui/button';

// const UserManagement = () => {
//   const [userList, setUserList] = useState([
//     { id: '5', name: 'Sam', email: 'Sam@gmail.com', phone: '6374624556', address: 'Engineers St', companyName: 'IBM', lastLogin: '2024-07-25', status: 'pending' },
//     { id: '7', name: 'Sananth', email: 'Sananth@gmail.com', phone: '9867453216', address: 'Main St', companyName: 'TATA', lastLogin: '2024-07-24', status: 'pending' },
//     { id: '8', name: 'Alex', email: 'Alex@gmail.com', phone: '8123456789', address: 'Wall St', companyName: 'Google', lastLogin: '2024-07-23', status: 'pending' },
//     { id: '9', name: 'Jordan', email: 'Jordan@gmail.com', phone: '9123456789', address: 'Bay St', companyName: 'Microsoft', lastLogin: '2024-07-22', status: 'pending' },
//     { id: '10', name: 'Taylor', email: 'Taylor@gmail.com', phone: '7123456789', address: 'Oak St', companyName: 'Amazon', lastLogin: '2024-07-21', status: 'pending' },
//   ]);

//   const updateStatus = (userId, status) => {
//     setUserList(userList.map(user => (user.id === userId ? { ...user, status } : user)));
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-gray-100">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="font-semibold text-lg text-gray-100">Name</TableHead>
//             <TableHead className="font-semibold text-lg text-gray-100">Email</TableHead>
//             <TableHead className="font-semibold text-lg text-gray-100">Phone</TableHead>
//             <TableHead className="font-semibold text-lg text-gray-100">Address</TableHead>
//             <TableHead className="font-semibold text-lg text-gray-100">Company</TableHead>
//             <TableHead className="font-semibold text-lg text-gray-100">Status</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody className="bg-gray-800">
//           {userList.map(user => (
//             <TableRow key={user.id}>
//               <TableCell className="p-4 text-gray-300">{user.name}</TableCell>
//               <TableCell className="p-4 text-gray-400">{user.email}</TableCell>
//               <TableCell className="p-4 text-gray-400">{user.phone}</TableCell>
//               <TableCell className="p-4 text-gray-400">{user.address}</TableCell>
//               <TableCell className="p-4 text-gray-400">{user.companyName}</TableCell>
//               <TableCell className="p-4 text-gray-400">
//                 {user.status === 'accepted' ? (
//                   <span className="text-green-500">Accepted</span>
//                 ) : user.status === 'declined' ? (
//                   <span className="text-red-500">Declined</span>
//                 ) : (
//                   <>
//                     <Button
//                       className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 mr-2"
//                       onClick={() => updateStatus(user.id, 'accepted')}
//                     >
//                       <FiCheckCircle />
//                     </Button>
//                     <Button
//                       className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2"
//                       onClick={() => updateStatus(user.id, 'declined')}
//                     >
//                       <FiXCircle />
//                     </Button>
//                   </>
//                 )}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default UserManagement;





// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
// import { Button } from '@/components/ui/button';

// const UserManagement = () => {
//   const [userList, setUserList] = useState([
//     { id: '5', name: 'Sam', email: 'Sam@gmail.com', phone: '6374624556', address: 'Engineers St', companyName: 'IBM', lastLogin: '2024-07-25', status: 'pending' },
//     { id: '7', name: 'Sananth', email: 'Sananth@gmail.com', phone: '9867453216', address: 'Main St', companyName: 'TATA', lastLogin: '2024-07-24', status: 'pending' },
//     { id: '8', name: 'Alex', email: 'Alex@gmail.com', phone: '8123456789', address: 'Wall St', companyName: 'Google', lastLogin: '2024-07-23', status: 'pending' },
//     { id: '9', name: 'Jordan', email: 'Jordan@gmail.com', phone: '9123456789', address: 'Bay St', companyName: 'Microsoft', lastLogin: '2024-07-22', status: 'pending' },
//     { id: '10', name: 'Taylor', email: 'Taylor@gmail.com', phone: '7123456789', address: 'Oak St', companyName: 'Amazon', lastLogin: '2024-07-21', status: 'pending' },
//   ]);

//   const updateStatus = (userId, status) => {
//     setUserList(userList.map(user => (user.id === userId ? { ...user, status } : user)));
//   };

//   return (
//     <div className="p-6 bg-white text-black">
//       <Table>
//         <TableHeader>
//           <TableRow className="bg-black text-white">
//             <TableHead className="font-semibold text-lg">Name</TableHead>
//             <TableHead className="font-semibold text-lg">Email</TableHead>
//             <TableHead className="font-semibold text-lg">Phone</TableHead>
//             <TableHead className="font-semibold text-lg">Address</TableHead>
//             <TableHead className="font-semibold text-lg">Company</TableHead>
//             <TableHead className="font-semibold text-lg">Status</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {userList.map(user => (
//             <TableRow key={user.id} className="hover:bg-gray-800">
//               <TableCell className="p-4 border-b border-gray-300">{user.name}</TableCell>
//               <TableCell className="p-4 border-b border-gray-300">{user.email}</TableCell>
//               <TableCell className="p-4 border-b border-gray-300">{user.phone}</TableCell>
//               <TableCell className="p-4 border-b border-gray-300">{user.address}</TableCell>
//               <TableCell className="p-4 border-b border-gray-300">{user.companyName}</TableCell>
//               <TableCell className="p-4 border-b border-gray-300">
//                 {user.status === 'accepted' ? (
//                   <span className="text-green-600">Accepted</span>
//                 ) : user.status === 'declined' ? (
//                   <span className="text-red-600">Declined</span>
//                 ) : (
//                   <>
//                     <Button
//                       className="bg-black hover:bg-gray-700 text-white rounded-full p-2 mr-2"
//                       onClick={() => updateStatus(user.id, 'accepted')}
//                     >
//                       <FiCheckCircle />
//                     </Button>
//                     <Button
//                       className="bg-black hover:bg-gray-700 text-white rounded-full p-2"
//                       onClick={() => updateStatus(user.id, 'declined')}
//                     >
//                       <FiXCircle />
//                     </Button>
//                   </>
//                 )}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default UserManagement;





import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const UserManagement = () => {
  const [userList, setUserList] = useState([
    { id: '5', name: 'Sam', email: 'Sam@gmail.com', phone: '6374624556', address: 'Engineers St', companyName: 'IBM', lastLogin: '2024-07-25', status: 'pending' },
    { id: '7', name: 'Sananth', email: 'Sananth@gmail.com', phone: '9867453216', address: 'Main St', companyName: 'TATA', lastLogin: '2024-07-24', status: 'pending' },
    { id: '8', name: 'Alex', email: 'Alex@gmail.com', phone: '8123456789', address: 'Wall St', companyName: 'Google', lastLogin: '2024-07-23', status: 'pending' },
    { id: '9', name: 'Jordan', email: 'Jordan@gmail.com', phone: '9123456789', address: 'Bay St', companyName: 'Microsoft', lastLogin: '2024-07-22', status: 'pending' },
    { id: '10', name: 'Taylor', email: 'Taylor@gmail.com', phone: '7123456789', address: 'Oak St', companyName: 'Amazon', lastLogin: '2024-07-21', status: 'pending' },
  ]);

  const updateStatus = (userId, status) => {
    setUserList(userList.map(user => (user.id === userId ? { ...user, status } : user)));
  };

  return (
    <div className="p-6 bg-black text-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-900 text-white">
            <TableHead className="font-semibold text-lg">Name</TableHead>
            <TableHead className="font-semibold text-lg">Email</TableHead>
            <TableHead className="font-semibold text-lg">Phone</TableHead>
            <TableHead className="font-semibold text-lg">Address</TableHead>
            <TableHead className="font-semibold text-lg">Company</TableHead>
            <TableHead className="font-semibold text-lg">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userList.map(user => (
            <TableRow key={user.id} className="hover:bg-gray-800">
              <TableCell className="p-4 border-b border-gray-700">{user.name}</TableCell>
              <TableCell className="p-4 border-b border-gray-700">{user.email}</TableCell>
              <TableCell className="p-4 border-b border-gray-700">{user.phone}</TableCell>
              <TableCell className="p-4 border-b border-gray-700">{user.address}</TableCell>
              <TableCell className="p-4 border-b border-gray-700">{user.companyName}</TableCell>
              <TableCell className="p-4 border-b border-gray-700">
                {user.status === 'accepted' ? (
                  <span className="text-green-400">Accepted</span>
                ) : user.status === 'declined' ? (
                  <span className="text-red-400">Declined</span>
                ) : (
                  <>
                    <Button
                      className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2 mr-2"
                      onClick={() => updateStatus(user.id, 'accepted')}
                    >
                      <FiCheckCircle />
                    </Button>
                    <Button
                      className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2"
                      onClick={() => updateStatus(user.id, 'declined')}
                    >
                      <FiXCircle />
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagement;
