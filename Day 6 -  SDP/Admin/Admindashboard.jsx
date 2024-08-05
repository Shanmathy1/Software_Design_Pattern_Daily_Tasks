// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { FaHome, FaUsers, FaBriefcase, FaCog, FaChartBar, FaEnvelope, FaShieldAlt, FaSuitcase } from 'react-icons/fa'; // Import new icons

// const Admindashboard = () => {
//   const cards = [
//     {
//       icon: <FaHome className='text-3xl text-blue-500' />,
//       title: 'Home',
//       description: 'Manage and view the main dashboard overview.',
//       link: '/', // Add link for navigation
//     },
//     {
//       icon: <FaUsers className='text-3xl text-black' />,
//       title: 'JobSeekers',
//       description: 'Access and manage job seekers profiles, including their applications and resumes.',
//       link: '/jobseekers', // Add link for navigation
//     },
//     {
//       icon: <FaSuitcase className='text-3xl text-red-500' />, // Updated icon
//       title: 'Employers',
//       description: 'Oversee employer accounts, job postings, and recruitment activities.',
//       link: '/employers', // Add link for navigation
//     },
//     {
//       icon: <FaShieldAlt className='text-3xl text-gray-500' />, // Updated icon
//       title: 'Security',
//       description: 'Manage security settings, monitor access controls, and handle user permissions.',
//       link: '/security', // Add link for navigation
//     },
//     {
//       icon: <FaChartBar className='text-3xl text-purple-500' />,
//       title: 'Analytics',
//       description: 'Review detailed analytics and reports to gain insights into system performance.',
//       link: '/analytics', // Add link for navigation
//     },
//     {
//       icon: <FaEnvelope className='text-3xl text-orange-500' />,
//       title: 'Messages',
//       description: 'Manage and view system messages, notifications, and communications.',
//       link: '/messages', // Add link for navigation
//     },
//   ];

//   return (
//     <div className="p-4">
//       {/* Container to center and align the cards */}
//       <div className="max-w-6xl mx-auto">
//         {/* Add space between the top and the first row */}
//         <div className="pt-8">
//           {/* First row */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
//             {cards.slice(0, 3).map((card, index) => (
//               <Link to={card.link} key={index} className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition-colors'>
//                 <div className='mb-4'>
//                   {card.icon}
//                 </div>
//                 <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
//                 <p className='text-gray-600'>{card.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Second row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {cards.slice(3).map((card, index) => (
//             <Link to={card.link} key={index} className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition-colors'>
//               <div className='mb-4'>
//                 {card.icon}
//               </div>
//               <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
//               <p className='text-gray-600'>{card.description}</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admindashboard;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaUsers, FaBriefcase, FaCog, FaChartBar, FaEnvelope, FaShieldAlt, FaSuitcase } from 'react-icons/fa';

// const Admindashboard = () => {
//   const cards = [
//     {
//       icon: <FaHome className='text-3xl text-blue-500' />,
//       title: 'Home',
//       description: 'View and manage the main dashboard overview.',
//       link: '/',
//     },
//     {
//       icon: <FaUsers className='text-3xl text-green-500' />,
//       title: 'JobFinder',
//       description: 'Manage job seekers profiles, applications, and resumes.',
//       link: '/jobfinder',
//     },
//     {
//       icon: <FaSuitcase className='text-3xl text-red-500' />,
//       title: 'Employers',
//       description: 'Oversee employer accounts, job postings, and recruitment activities.',
//       link: '/employers',
//     },
//     {
//       icon: <FaShieldAlt className='text-3xl text-yellow-500' />,
//       title: 'Security',
//       description: 'Manage security settings, monitor access controls, and handle user permissions.',
//       link: '/security',
//     },
//     {
//       icon: <FaChartBar className='text-3xl text-purple-500' />,
//       title: 'Analytics',
//       description: 'Review detailed analytics and reports to gain insights into system performance.',
//       link: '/analytics',
//     },
//     {
//       icon: <FaEnvelope className='text-3xl text-orange-500' />,
//       title: 'Messages',
//       description: 'Manage and view system messages, notifications, and communications.',
//       link: '/messages',
//     },
//   ];

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800">JobFinder Admin Dashboard</h1>
//           <p className="text-gray-600 mt-2">Welcome to your admin dashboard. Efficiently manage your platform with these tools.</p>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cards.map((card, index) => (
//             <Link to={card.link} key={index} className="group block bg-white shadow-lg rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
//               <div className="flex flex-col items-center">
//                 <div className="bg-gray-200 p-4 rounded-full mb-4">
//                   {card.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-500">{card.title}</h3>
//                 <p className="text-gray-600 text-center">{card.description}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admindashboard;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaUsers, FaBriefcase, FaCog, FaChartBar, FaEnvelope, FaShieldAlt, FaSuitcase } from 'react-icons/fa';

// const AdminDashboard = () => {
//   const cards = [
//     {
//       icon: <FaHome className='text-3xl text-blue-500' />,
//       title: 'Home',
//       description: 'Navigate to Homepage.',
//       link: '/',
//     },
//     {
//       icon: <FaUsers className='text-3xl text-green-500' />,
//       title: 'JobFinder',
//       description: 'Manage job seekers profiles, applications, and resumes.',
//       link: '/jobfinder',
//     },
//     {
//       icon: <FaSuitcase className='text-3xl text-red-500' />,
//       title: 'Employers',
//       description: 'Oversee employer accounts, job postings, and recruitment activities.',
//       link: '/employers',
//     },
//     {
//       icon: <FaShieldAlt className='text-3xl text-yellow-500' />,
//       title: 'Security',
//       description: 'Manage security settings, monitor access controls, and handle user permissions.',
//       link: '/security',
//     },
//     {
//       icon: <FaChartBar className='text-3xl text-purple-500' />,
//       title: 'Analytics',
//       description: 'Review detailed analytics and reports to gain insights into system performance.',
//       link: '/analytics',
//     },
//     {
//       icon: <FaEnvelope className='text-3xl text-orange-500' />,
//       title: 'Messages',
//       description: 'Manage and view system messages, notifications, and communications.',
//       link: '/messages',
//     },
//   ];

//   return (
//     <div className="p-8 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-white">JobFinder Admin Dashboard</h1>
//           <p className="text-blue-200 mt-2">Welcome to your admin dashboard. Efficiently manage your platform with these tools.</p>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cards.map((card, index) => (
//             <Link to={card.link} key={index} className="group block bg-white shadow-lg rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
//               <div className="flex flex-col items-center">
//                 <div className="bg-gray-200 p-4 rounded-full mb-4">
//                   {card.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-500">{card.title}</h3>
//                 <p className="text-gray-600 text-center">{card.description}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const cards = [
    {
      imageUrl: 'https://t3.ftcdn.net/jpg/01/70/42/20/360_F_170422089_Wx44llTifELLCN5tZ6hs5KMvjZinM4jj.jpg',
      title: 'Home',
      description: 'Navigate to Homepage.',
      link: '/',
    },
    {
      imageUrl: 'https://thumbs.dreamstime.com/b/vector-illustration-male-profile-icon-black-round-logo-silhouette-masculinity-professionalism-features-stylish-modern-314207355.jpg',
      title: 'JobFinder',
      description: 'Manage job seekers profiles, applications, and resumes.',
      link: '/jobfinder',
    },
    {
      imageUrl: 'data:image/png;base64,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',
      title: 'Employers',
      description: 'Oversee employer accounts, job postings, and recruitment activities.',
      link: '/employers',
    },
    // {
    //   imageUrl: 'https://t3.ftcdn.net/jpg/01/70/42/20/360_F_170422089_Wx44llTifELLCN5tZ6hs5KMvjZinM4jj.jpg',
    //   title: 'Security',
    //   description: 'Manage security settings, monitor access controls, and handle user permissions.',
    //   link: '/security',
    // },
    // {
    //   imageUrl: 'https://t3.ftcdn.net/jpg/01/70/42/20/360_F_170422089_Wx44llTifELLCN5tZ6hs5KMvjZinM4jj.jpg',
    //   title: 'Analytics',
    //   description: 'Review detailed analytics and reports to gain insights into system performance.',
    //   link: '/analytics',
    // },
    // {
    //   imageUrl: 'https://t3.ftcdn.net/jpg/01/70/42/20/360_F_170422089_Wx44llTifELLCN5tZ6hs5KMvjZinM4jj.jpg',
    //   title: 'Messages',
    //   description: 'Manage and view system messages, notifications, and communications.',
    //   link: '/messages',
    // },
  ];

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">JobFinder Admin Dashboard</h1>
          <p className="mt-2">Welcome to your admin dashboard. Efficiently manage your platform with these tools.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link to={card.link} key={index} className="group block shadow-lg rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 p-4 rounded-full mb-4">
                  <img src={card.imageUrl} alt={card.title} className="w-16 h-16 object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500">{card.title}</h3>
                <p className="text-center">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

