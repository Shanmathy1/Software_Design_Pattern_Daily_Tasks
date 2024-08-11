// // import React from 'react';
// // import { NavLink, useNavigate } from 'react-router-dom';
// // import { Power, Layers } from 'lucide-react';
// // import { Button } from '../ui/button';

// // const Leftbar = () => {
// //     const navigate = useNavigate();

// //     const handleLogout = () => {
// //         // Perform any logout logic here if necessary
// //         // For example, clearing tokens or user session

// //         // Navigate to the login page
// //         navigate('/login');
// //     };

// //     const UserLinks = [
// //         {
// //             title: 'Dashboard',
// //             link: '/userdashboard',
// //             iconUrl: 'https://static-00.iconduck.com/assets.00/dashboard-icon-2048x2048-4tsdcjxa.png'
// //         },
// //         {
// //             title: 'Update Profile',
// //             link: '/user/update-profile',
// //             iconUrl: 'https://cdn-icons-png.freepik.com/512/732/732200.png'
// //         },
// //         {
// //             title: 'Upload Resume',
// //             link: '/user/upload-resume',
// //             iconUrl: 'https://cdn-icons-png.freepik.com/512/119/119607.png'
// //         },
// //         {
// //             title: 'Job Listings',
// //             link: '/user/job-listings',
// //             iconUrl: 'https://cdn-icons-png.freepik.com/512/2898/2898176.png'
// //         },
// //         {
// //             title: 'Messages',
// //             link: '/user/messages',
// //             iconUrl: 'https://cdn-icons-png.freepik.com/512/458/458588.png'
// //         }
// //     ];

// //     return (
// //         <div className='h-screen w-1/6 flex flex-col justify-between bg-slate-500 shadow-sm shadow-primary pt-10 border-r-2 border-slate-500'>
// //             <div className='text-black font-bold text-2xl flex justify-center items-center h-[5%] border-b-2 border-slate-500'>
// //                 <NavLink to='/' className='flex items-center text-black hover:text-slate-200'>
// //                     <Layers className="mr-2" size={24} />
// //                     JobFinder
// //                 </NavLink>
// //             </div>
// //             <div className='flex flex-col justify-start items-center gap-2 h-[90%] w-full'>
// //                 {UserLinks.map((data, index) => (
// //                     <NavLink
// //                         key={index}
// //                         to={data.link}
// //                         className='p-5 bg-slate-600 hover:bg-slate-700 text-black font-bold mt-2 w-full flex items-center border-b-2 border-slate-500'
// //                     >
// //                         <img src={data.iconUrl} alt={data.title} className='mr-2' width={20} height={20} />
// //                         {data.title}
// //                     </NavLink>
// //                 ))}
// //             </div>
// //             <div className='h-[5%] w-full flex flex-col justify-center items-center'>
// //                 <Button
// //                     className='p-5 bg-slate-600 hover:bg-red-500/10 font-bold w-full border border-slate-500'
// //                     onClick={handleLogout}
// //                 >
// //                     <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
// //                         <Power size={20} />
// //                         Logout
// //                     </span>
// //                 </Button>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Leftbar;




// import React from 'react';
// import { NavLink, useNavigate, useLocation } from 'react-router-dom';
// import { Power, Layers } from 'lucide-react';
// import { Button } from '../ui/button';

// const Leftbar = () => {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const handleLogout = () => {
//         // Perform any logout logic here if necessary
//         // For example, clearing tokens or user session

//         // Navigate to the login page
//         navigate('/login');
//     };

//     const UserLinks = [
//         {
//             title: 'Dashboard',
//             link: '/userdashboard',
//             iconUrl: 'https://static-00.iconduck.com/assets.00/dashboard-icon-2048x2048-4tsdcjxa.png'
//         },
//         {
//             title: 'Update Profile',
//             link: '/user/profile/update',
//             iconUrl: 'https://cdn-icons-png.freepik.com/512/732/732200.png'
//         },
//         {
//             title: 'Upload Resume',
//             link: '/user/resume',
//             iconUrl: 'https://cdn-icons-png.freepik.com/512/119/119607.png'
//         },
//         {
//             title: 'Job Listings',
//             link: '/user/use',
//             iconUrl: 'https://cdn-icons-png.freepik.com/512/2898/2898176.png'
//         },
//         {
//             title: 'Messages',
//             link: '/user/messages',
//             iconUrl: 'https://cdn-icons-png.freepik.com/512/458/458588.png'
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col justify-between bg-slate-500 shadow-sm shadow-primary pt-10 border-r-2 border-slate-500'>
//             <div className='text-black font-bold text-2xl flex justify-center items-center h-[5%] border-b-2 border-slate-500'>
//                 <NavLink to='/' className='flex items-center text-black hover:text-slate-200'>
//                     <Layers className="mr-2" size={24} />
//                     JobFinder
//                 </NavLink>
//             </div>
//             <div className='flex flex-col justify-start items-center gap-2 h-[90%] w-full'>
//                 {UserLinks.map((data, index) => (
//                     <NavLink
//                         key={index}
//                         to={data.link}
//                         className={({ isActive }) => 
//                             `p-5 ${isActive ? 'bg-slate-700' : 'bg-slate-600'} hover:bg-slate-700 text-white font-bold mt-2 w-full flex items-center border-b-2 border-slate-500`
//                         }
//                     >
//                         <img src={data.iconUrl} alt={data.title} className='mr-2' width={20} height={20} />
//                         {data.title}
//                     </NavLink>
//                 ))}
//             </div>
//             <div className='h-[5%] w-full flex flex-col justify-center items-center'>
//                 <Button
//                     className='p-5 bg-slate-600 hover:bg-red-500/10 font-bold w-full border border-slate-500'
//                     onClick={handleLogout}
//                 >
//                     <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
//                         <Power size={20} />
//                         Logout
//                     </span>
//                 </Button>
//             </div>
//         </div>
//     );
// }

// export default Leftbar;


import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Power, Layers } from 'lucide-react';
import { Button } from '../ui/button';

const Leftbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform any logout logic here if necessary
        // For example, clearing tokens or user session

        // Navigate to the login page
        navigate('/login');
    };

    const UserLinks = [
        {
            title: 'Dashboard',
            link: '/userdashboard',
            iconUrl: 'https://static-00.iconduck.com/assets.00/dashboard-icon-2048x2048-4tsdcjxa.png'
        },
        {
            title: 'Update Profile',
            link: '/user/profile/update',
            iconUrl: 'https://cdn-icons-png.freepik.com/512/732/732200.png'
        },
        {
            title: 'Upload Resume',
            link: '/user/resume',
            iconUrl: 'https://cdn-icons-png.freepik.com/512/119/119607.png'
        },
        {
            title: 'Job Listings',
            link: '/user/joblistings/applyjob', // Ensure this is the correct route
            iconUrl: 'https://cdn-icons-png.freepik.com/512/2898/2898176.png'
        },
        {
            title: 'Apply Now',
            link: '/user/applynow/jobsection',
            iconUrl: 'https://cdn-icons-png.freepik.com/512/458/458588.png'
        }
    ];

    return (
        <div className='h-screen w-1/6 flex flex-col justify-between bg-slate-500 shadow-sm shadow-primary pt-10 border-r-2 border-slate-500'>
            <div className='text-black font-bold text-2xl flex justify-center items-center h-[5%] border-b-2 border-slate-500'>
                <NavLink to='/' className='flex items-center text-black hover:text-slate-200'>
                    <Layers className="mr-2" size={24} />
                    JobFinder
                </NavLink>
            </div>
            <div className='flex flex-col justify-start items-center gap-2 h-[90%] w-full'>
                {UserLinks.map((data, index) => (
                    <NavLink
                        key={index}
                        to={data.link}
                        className={({ isActive }) => 
                            `p-5 ${isActive ? 'bg-slate-700' : 'bg-slate-600'} hover:bg-slate-700 text-white font-bold mt-2 w-full flex items-center border-b-2 border-slate-500`
                        }
                    >
                        <img src={data.iconUrl} alt={data.title} className='mr-2' width={20} height={20} />
                        {data.title}
                    </NavLink>
                ))}
            </div>
            <div className='h-[5%] w-full flex flex-col justify-center items-center'>
                <Button
                    className='p-5 bg-slate-600 hover:bg-red-500/10 font-bold w-full border border-slate-500'
                    onClick={handleLogout}
                >
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={20} />
                        Logout
                    </span>
                </Button>
            </div>
        </div>
    );
}

export default Leftbar;

