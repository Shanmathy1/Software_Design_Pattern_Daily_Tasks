// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { LayoutDashboard, Cog, Briefcase, Users, Power } from 'lucide-react';
// import { Button } from '../ui/button';

// const Leftbar = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         // Perform any logout logic here if necessary
//         // For example, clearing tokens or user session

//         // Navigate to the login page
//         navigate('/login');
//     };

//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admindashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         },
//         {
//             title: 'Jobs',
//             link: '/admin/jobs',
//             icon: Briefcase
//         },
//         {
//             title: 'Settings',
//             link: '/admin/settings',
//             icon: Cog
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col justify-between bg-white shadow-sm shadow-primary pt-10 border-r-2 border-white'>
//             <div className='text-primary font-bold text-2xl flex justify-center items-center h-[5%] border-b-2 border-white'>
//                 <NavLink to='/' className='flex items-center text-primary hover:text-primary-dark'>
//                     JobQuest.in
//                 </NavLink>
//             </div>
//             <div className='flex flex-col justify-start items-center gap-2 h-[90%] w-full'>
//                 {AdminLinks.map((data, index) => (
//                     <NavLink
//                         key={index}
//                         to={data.link}
//                         className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full flex items-center border-b-2 border-white'
//                     >
//                         {React.createElement(data.icon, { size: 20, className: 'mr-2' })}
//                         {data.title}
//                     </NavLink>
//                 ))}
//             </div>
//             <div className='h-[5%] w-full flex flex-col justify-center items-center'>
//                 <Button
//                     className='p-5 bg-gray-100 hover:bg-red-500/10 font-bold w-full border border-white'
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





// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { LayoutDashboard, Cog, Briefcase, Users, Power } from 'lucide-react';
// import { Button } from '../ui/button';
// import { Layers } from 'lucide-react';

// const Leftbar = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
       
//         navigate('/login');
//     };

//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admindashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         },
//         {
//             title: 'Jobs',
//             link: '/admin/jobs',
//             icon: Briefcase
//         },
//         {
//             title: 'Settings',
//             link: '/admin/settings',
//             icon: Cog
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col justify-between bg-white shadow-sm shadow-primary pt-10 border-r-2 border-white'>
//             <div className='text-primary font-bold text-2xl flex justify-center items-center h-[5%] border-b-2 border-white'>
//                 <NavLink to='/' className='flex items-center text-primary hover:text-primary-dark'>
//                     JobFinder
//                 </NavLink>
//             </div>
//             <div className='flex flex-col justify-start items-center gap-2 h-[90%] w-full'>
//                 {AdminLinks.map((data, index) => (
//                     <NavLink
//                         key={index}
//                         to={data.link}
//                         className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full flex items-center border-b-2 border-white'
//                     >
//                         {React.createElement(data.icon, { size: 20, className: 'mr-2' })}
//                         {data.title}
//                     </NavLink>
//                 ))}
//             </div>
//             <div className='h-[5%] w-full flex flex-col justify-center items-center'>
//                 <Button
//                     className='p-5 bg-gray-100 hover:bg-red-500/10 font-bold w-full border border-white'
//                     onClick={handleLogout}
//                 >
//                     <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
//                         <Power size={20} />
//                         Logout
//                     </span>
//                 </Button>
//             </div>
//             <div>
//       <Layers className="text-white" />
//       </div>
//         </div>
//     );
// }

// export default Leftbar;





// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { LayoutDashboard, Cog, Briefcase, Users, Power, Layers } from 'lucide-react';
// import { Button } from '../ui/button';

// const Leftbar = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
        
//         navigate('/login');
//     };

//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admindashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         },
//         {
//             title: 'Jobs',
//             link: '/admin/jobs',
//             icon: Briefcase
//         },
//         {
//             title: 'Settings',
//             link: '/admin/settings',
//             icon: Cog
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col justify-between bg-white shadow-sm shadow-primary pt-10 border-r-2 border-white'>
//             <div className='text-primary font-bold text-2xl flex justify-center items-center h-[5%] border-b-2 border-white'>
//                 <NavLink to='/' className='flex items-center text-primary hover:text-primary-dark'>
//                     JobFinder
//                 </NavLink>
//             </div>
//             <div className='flex flex-col justify-start items-center gap-2 h-[90%] w-full'>
//                 {AdminLinks.map((data, index) => (
//                     <NavLink
//                         key={index}
//                         to={data.link}
//                         className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full flex items-center border-b-2 border-white'
//                     >
//                         {React.createElement(data.icon, { size: 20, className: 'mr-2' })}
//                         {data.title}
//                     </NavLink>
//                 ))}
//             </div>
//             <div className='h-[5%] w-full flex flex-col justify-center items-center'>
//                 <Button
//                     className='p-5 bg-gray-100 hover:bg-red-500/10 font-bold w-full border border-white'
//                     onClick={handleLogout}
//                 >
//                     <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
//                         <Power size={20} />
//                         Logout
//                     </span>
//                 </Button>
//             </div>
//             <div className='flex justify-center items-center'>
//                 <Layers className="text-primary" size={24} />
//             </div>
//         </div>
//     );
// }

// export default Leftbar;

// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { LayoutDashboard, Cog, Briefcase, Users, Power, Layers } from 'lucide-react';
// import { Button } from '../ui/button';

// const Leftbar = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
        
//         navigate('/login');
//     };

//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admindashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         },
//         {
//             title: 'Jobs',
//             link: '/admin/jobs',
//             icon: Briefcase
//         },
//         {
//             title: 'Settings',
//             link: '/admin/settings',
//             icon: Cog
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col justify-between bg-white shadow-sm shadow-primary pt-10 border-r-2 border-white'>
//             <div className='text-primary font-bold text-2xl flex justify-center items-center h-[5%] border-b-2 border-white'>
//                 <NavLink to='/' className='flex items-center text-primary hover:text-primary-dark'>
//                     <Layers className="text-primary mr-2" size={24} />
//                     JobFinder
//                 </NavLink>
//             </div>
//             <div className='flex flex-col justify-start items-center gap-2 h-[90%] w-full'>
//                 {AdminLinks.map((data, index) => (
//                     <NavLink
//                         key={index}
//                         to={data.link}
//                         className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full flex items-center border-b-2 border-white'
//                     >
//                         {React.createElement(data.icon, { size: 20, className: 'mr-2' })}
//                         {data.title}
//                     </NavLink>
//                 ))}
//             </div>
//             <div className='h-[5%] w-full flex flex-col justify-center items-center'>
//                 <Button
//                     className='p-5 bg-gray-100 hover:bg-red-500/10 font-bold w-full border border-white'
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



// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { LayoutDashboard, Cog, Briefcase, Users, Power, Layers } from 'lucide-react';
// import { Button } from '../ui/button';

// const Leftbar = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
        
//         navigate('/login');
//     };

//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admindashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         },
//         {
//             title: 'Jobs',
//             link: '/admin/jobs',
//             icon: Briefcase
//         },
//         {
//             title: 'Settings',
//             link: '/admin/settings',
//             icon: Cog
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
//                 {AdminLinks.map((data, index) => (
//                     <NavLink
//                         key={index}
//                         to={data.link}
//                         className='p-5 bg-slate-600 hover:bg-slate-700 text-black font-bold mt-2 w-full flex items-center border-b-2 border-slate-500'
//                     >
//                         {React.createElement(data.icon, { size: 20, className: 'mr-2' })}
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

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admindashboard',
            iconUrl: 'https://static-00.iconduck.com/assets.00/dashboard-icon-2048x2048-4tsdcjxa.png'
        },
        {
            title: 'Users',
            link: '/admin/users',
            iconUrl: 'https://cdn-icons-png.freepik.com/512/9307/9307950.png'
        },
        {
            title: 'Jobs',
            link: '/admin/jobs',
            iconUrl: 'https://cdn-icons-png.freepik.com/256/6492/6492312.png'
        },
        {
            title: 'Settings',
            link: '/admin/settings',
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/9720/9720967.png'
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
                {AdminLinks.map((data, index) => (
                    <NavLink
                        key={index}
                        to={data.link}
                        className='p-5 bg-slate-600 hover:bg-slate-700 text-black font-bold mt-2 w-full flex items-center border-b-2 border-slate-500'
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
