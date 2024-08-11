// import React, { useState } from 'react';
// import { Briefcase, Heart, User } from 'lucide-react'; // Importing icons from lucide-react

// const Userdashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   // Example data for recent activities
//   const activities = [
//     "Applied to Frontend Developer position",
//     "Saved Backend Developer job listing",
//     "Profile updated",
//     "Applied to Product Manager position"
//   ];

//   // Filter activities based on search term
//   const filteredActivities = activities.filter(activity =>
//     activity.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='p-6'>
//       {/* Welcome Section */}
      
//         <h1 className='text-3xl font-bold mb-4'>Hello, User!</h1>
//         <p className='text-gray-600'>
//          It's great to have you back.
//         </p>
    
//     </div>
//   );
// }

// export default Userdashboard;


// import React, { useState } from 'react';
// import { Briefcase, Heart, User, Upload, Edit3 } from 'lucide-react'; // Importing icons from lucide-react

// const Userdashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [profileUpdated, setProfileUpdated] = useState(false);
//   const [resumeUploaded, setResumeUploaded] = useState(false);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleProfileUpdate = () => {
//     setProfileUpdated(true);
//     // Logic for updating the profile
//   };

//   const handleResumeUpload = () => {
//     setResumeUploaded(true);
//     // Logic for uploading the resume
//   };

//   // Example data for recent activities
//   const activities = [
//     "Applied to Frontend Developer position",
//     "Saved Backend Developer job listing",
//     "Profile updated",
//     "Applied to Product Manager position"
//   ];

//   // Filter activities based on search term
//   const filteredActivities = activities.filter(activity =>
//     activity.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='p-6'>
//       {/* Welcome Section */}
//       <h1 className='text-3xl font-bold mb-4'>Hello, User!</h1>
//       <p className='text-gray-600'>
//         It's great to have you back.
//       </p>

//       {/* Search Bar */}
//       <div className='mb-6'>
//         <input
//           type='text'
//           placeholder='Search activities...'
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className='p-2 border rounded'
//         />
//       </div>

//       {/* Cards Section */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
//         <div className='p-4 bg-white rounded shadow'>
//           <Edit3 className='text-blue-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Update Profile</h2>
//           <p className='text-gray-600 mb-4'>Keep your profile information up to date.</p>
//           <button
//             onClick={handleProfileUpdate}
//             className='px-4 py-2 bg-blue-500 text-white rounded'
//           >
//             Update Profile
//           </button>
//         </div>
//         <div className='p-4 bg-white rounded shadow'>
//           <Upload className='text-green-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Upload Resume</h2>
//           <p className='text-gray-600 mb-4'>Upload your latest resume to apply for jobs.</p>
//           <button
//             onClick={handleResumeUpload}
//             className='px-4 py-2 bg-green-500 text-white rounded'
//           >
//             Upload Resume
//           </button>
//         </div>
//       </div>

//       {/* Activities Section */}
//       <div>
//         <h2 className='text-2xl font-bold mb-4'>Recent Activities</h2>
//         <ul>
//           {filteredActivities.map((activity, index) => (
//             <li key={index} className='mb-2 p-2 border-b'>
//               {activity}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Profile Update and Resume Upload Feedback */}
//       <div className='mt-6'>
//         {profileUpdated && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Profile successfully updated!
//           </div>
//         )}
//         {resumeUploaded && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Resume successfully uploaded!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Userdashboard;





// import React, { useState } from 'react';
// import { Briefcase, Heart, User, Upload, Edit3 } from 'lucide-react';
// import { useHistory } from 'react-router-dom';

// const Userdashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [profileUpdated, setProfileUpdated] = useState(false);
//   const [resumeUploaded, setResumeUploaded] = useState(false);

//   const history = useHistory();

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleProfileUpdate = () => {
//     setProfileUpdated(true);
//     // Logic for updating the profile
//   };

//   const handleResumeUpload = () => {
//     history.push('/upload/resume');
//   };

//   const activities = [
//     "Applied to Frontend Developer position",
//     "Saved Backend Developer job listing",
//     "Profile updated",
//     "Applied to Product Manager position"
//   ];

//   const filteredActivities = activities.filter(activity =>
//     activity.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='p-6'>
//       <h1 className='text-3xl font-bold mb-4'>Hello, User!</h1>
//       <p className='text-gray-600'>
//         It's great to have you back.
//       </p>

//       <div className='mb-6'>
//         <input
//           type='text'
//           placeholder='Search activities...'
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className='p-2 border rounded'
//         />
//       </div>

//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
//         <div className='p-4 bg-white rounded shadow'>
//           <Edit3 className='text-blue-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Update Profile</h2>
//           <p className='text-gray-600 mb-4'>Keep your profile information up to date.</p>
//           <button
//             onClick={handleProfileUpdate}
//             className='px-4 py-2 bg-blue-500 text-white rounded'
//           >
//             Update Profile
//           </button>
//         </div>
//         <div className='p-4 bg-white rounded shadow'>
//           <Upload className='text-green-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Upload Resume</h2>
//           <p className='text-gray-600 mb-4'>Upload your latest resume to apply for jobs.</p>
//           <button
//             onClick={handleResumeUpload}
//             className='px-4 py-2 bg-green-500 text-white rounded'
//           >
//             Upload Resume
//           </button>
//         </div>
//       </div>

//       <div>
//         <h2 className='text-2xl font-bold mb-4'>Recent Activities</h2>
//         <ul>
//           {filteredActivities.map((activity, index) => (
//             <li key={index} className='mb-2 p-2 border-b'>
//               {activity}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className='mt-6'>
//         {profileUpdated && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Profile successfully updated!
//           </div>
//         )}
//         {resumeUploaded && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Resume successfully uploaded!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Userdashboard;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Briefcase, Heart, User, Upload, Edit3 } from 'lucide-react'; // Importing icons from lucide-react

// const Userdashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [profileUpdated, setProfileUpdated] = useState(false);
//   const [resumeUploaded, setResumeUploaded] = useState(false);

//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleProfileUpdate = () => {
//     setProfileUpdated(true);
//     // Logic for updating the profile
//   };

//   const handleResumeUpload = () => {
//     navigate('/user/resume');
//   };

//   // Example data for recent activities
//   const activities = [
//     "Applied to Frontend Developer position",
//     "Saved Backend Developer job listing",
//     "Profile updated",
//     "Applied to Product Manager position"
//   ];

//   // Filter activities based on search term
//   const filteredActivities = activities.filter(activity =>
//     activity.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='p-6'>
//       {/* Welcome Section */}
//       <h1 className='text-3xl font-bold mb-4'>Hello, User!</h1>
//       <p className='text-gray-600'>
//         It's great to have you back.
//       </p>

//       {/* Search Bar */}
//       <div className='mb-6'>
//         <input
//           type='text'
//           placeholder='Search activities...'
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className='p-2 border rounded'
//         />
//       </div>

//       {/* Cards Section */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
//         <div className='p-4 bg-white rounded shadow'>
//           <Edit3 className='text-blue-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Update Profile</h2>
//           <p className='text-gray-600 mb-4'>Keep your profile information up to date.</p>
//           <button
//             onClick={handleProfileUpdate}
//             className='px-4 py-2 bg-blue-500 text-white rounded'
//           >
//             Update Profile
//           </button>
//         </div>
//         <div className='p-4 bg-white rounded shadow'>
//           <Upload className='text-green-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Upload Resume</h2>
//           <p className='text-gray-600 mb-4'>Upload your latest resume to apply for jobs.</p>
//           <button
//             onClick={handleResumeUpload}
//             className='px-4 py-2 bg-green-500 text-white rounded'
//           >
//             Upload Resume
//           </button>
//         </div>
//       </div>

//       {/* Activities Section */}
//       <div>
//         <h2 className='text-2xl font-bold mb-4'>Recent Activities</h2>
//         <ul>
//           {filteredActivities.map((activity, index) => (
//             <li key={index} className='mb-2 p-2 border-b'>
//               {activity}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Profile Update and Resume Upload Feedback */}
//       <div className='mt-6'>
//         {profileUpdated && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Profile successfully updated!
//           </div>
//         )}
//         {resumeUploaded && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Resume successfully uploaded!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Userdashboard;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Briefcase, Heart, User, Upload, Edit3 } from 'lucide-react'; // Importing icons from lucide-react

// const Userdashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [profileUpdated, setProfileUpdated] = useState(false);
//   const [resumeUploaded, setResumeUploaded] = useState(false);

//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleProfileUpdate = () => {
//     navigate('/user/profile/update');
//   };

//   const handleResumeUpload = () => {
//     navigate('/user/resume');
//   };

//   // Example data for recent activities
//   const activities = [
//     "Applied to Frontend Developer position",
//     "Saved Backend Developer job listing",
//     "Profile updated",
//     "Applied to Product Manager position"
//   ];

//   // Filter activities based on search term
//   const filteredActivities = activities.filter(activity =>
//     activity.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='p-6'>
//       {/* Welcome Section */}
//       <h1 className='text-3xl font-bold mb-4'>Hello, User!</h1>
//       <p className='text-gray-600'>
//         It's great to have you back.
//       </p>

//       {/* Search Bar */}
//       <div className='mb-6'>
//         <input
//           type='text'
//           placeholder='Search activities...'
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className='p-2 border rounded'
//         />
//       </div>

//       {/* Cards Section */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
//         <div className='p-4 bg-white rounded shadow'>
//           <Edit3 className='text-blue-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Update Profile</h2>
//           <p className='text-gray-600 mb-4'>Keep your profile information up to date.</p>
//           <button
//             onClick={handleProfileUpdate}
//             className='px-4 py-2 bg-blue-500 text-white rounded'
//           >
//             Update Profile
//           </button>
//         </div>
//         <div className='p-4 bg-white rounded shadow'>
//           <Upload className='text-green-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Upload Resume</h2>
//           <p className='text-gray-600 mb-4'>Upload your latest resume to apply for jobs.</p>
//           <button
//             onClick={handleResumeUpload}
//             className='px-4 py-2 bg-green-500 text-white rounded'
//           >
//             Upload Resume
//           </button>
//         </div>
//       </div>

//       {/* Activities Section */}
//       <div>
//         <h2 className='text-2xl font-bold mb-4'>Recent Activities</h2>
//         <ul>
//           {filteredActivities.map((activity, index) => (
//             <li key={index} className='mb-2 p-2 border-b'>
//               {activity}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Profile Update and Resume Upload Feedback */}
//       <div className='mt-6'>
//         {profileUpdated && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Profile successfully updated!
//           </div>
//         )}
//         {resumeUploaded && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Resume successfully uploaded!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Userdashboard;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Briefcase, Heart, User, Upload, Edit3 } from 'lucide-react'; // Importing icons from lucide-react

// const Userdashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [profileUpdated, setProfileUpdated] = useState(false);
//   const [resumeUploaded, setResumeUploaded] = useState(false);

//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleProfileUpdate = () => {
//     // Simulate profile update
//     setProfileUpdated(true);
//     // Navigate to the profile update page if needed
//     // navigate('/user/profile/update');
//   };

//   const handleResumeUpload = () => {
//     navigate('/user/resume');
//   };

//   // Example data for recent activities
//   const activities = [
//     "Applied to Frontend Developer position",
//     "Saved Backend Developer job listing",
//     "Profile updated",
//     "Applied to Product Manager position"
//   ];

//   // Filter activities based on search term
//   const filteredActivities = activities.filter(activity =>
//     activity.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='p-6'>
//       {/* Welcome Section */}
//       <h1 className='text-3xl font-bold mb-4'>Hello, User!</h1>
//       <p className='text-gray-600'>
//         It's great to have you back.
//       </p>

//       {/* Search Bar */}
//       <div className='mb-6'>
//         <input
//           type='text'
//           placeholder='Search activities...'
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className='p-2 border rounded'
//         />
//       </div>

//       {/* Cards Section */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
//         <div className='p-4 bg-white rounded shadow'>
//           <Edit3 className='text-blue-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Update Profile</h2>
//           <p className='text-gray-600 mb-4'>Keep your profile information up to date.</p>
//           <button
//             onClick={handleProfileUpdate}
//             className='px-4 py-2 bg-blue-500 text-white rounded'
//           >
//             Update Profile
//           </button>
//         </div>
//         <div className='p-4 bg-white rounded shadow'>
//           <Upload className='text-green-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Update Resume</h2>
//           <p className='text-gray-600 mb-4'>Upload your latest resume to apply for jobs.</p>
//           <button
//             onClick={handleResumeUpload}
//             className='px-4 py-2 bg-green-500 text-white rounded'
//           >
//             Update Resume
//           </button>
//         </div>
//       </div>

//       {/* Activities Section */}
//       <div>
//         <h2 className='text-2xl font-bold mb-4'>Recent Activities</h2>
//         <ul>
//           {filteredActivities.map((activity, index) => (
//             <li key={index} className='mb-2 p-2 border-b'>
//               {activity}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Profile Update and Resume Upload Feedback */}
//       <div className='mt-6'>
//         {profileUpdated && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Profile successfully updated!
//           </div>
//         )}
//         {resumeUploaded && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Resume successfully uploaded!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Userdashboard;






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Upload, Edit3 } from 'lucide-react'; // Importing icons from lucide-react

// const Userdashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [profileUpdated, setProfileUpdated] = useState(false);
//   const [resumeUploaded, setResumeUploaded] = useState(false);

//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleProfileUpdate = () => {
//     // Simulate a delay for profile update
//     setTimeout(() => {
//       setProfileUpdated(true);
//     }, 1000);
//   };

//   const handleResumeUpload = () => {
//     navigate('/user/resume');
//   };

//   // Example data for recent activities
//   const activities = [
//     "Applied to Frontend Developer position",
//     "Saved Backend Developer job listing",
//     "Profile updated",
//     "Applied to Product Manager position"
//   ];

//   // Filter activities based on search term
//   const filteredActivities = activities.filter(activity =>
//     activity.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='p-6'>
//       {/* Welcome Section */}
//       <h1 className='text-3xl font-bold mb-4'>Hello, User!</h1>
//       <p className='text-gray-600'>
//         It's great to have you back.
//       </p>

//       {/* Search Bar */}
//       <div className='mb-6'>
//         <input
//           type='text'
//           placeholder='Search activities...'
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className='p-2 border rounded'
//         />
//       </div>

//       {/* Cards Section */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
//         <div className='p-4 bg-white rounded shadow'>
//           <Edit3 className='text-blue-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Update Profile</h2>
//           <p className='text-gray-600 mb-4'>Keep your profile information up to date.</p>
//           <button
//             onClick={handleProfileUpdate}
//             className='px-4 py-2 bg-blue-500 text-white rounded'
//           >
//             Update Profile
//           </button>
//         </div>
//         <div className='p-4 bg-white rounded shadow'>
//           <Upload className='text-green-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Update Resume</h2>
//           <p className='text-gray-600 mb-4'>Upload your latest resume to apply for jobs.</p>
//           <button
//             onClick={handleResumeUpload}
//             className='px-4 py-2 bg-green-500 text-white rounded'
//           >
//             Update Resume
//           </button>
//         </div>
//       </div>

//       {/* Activities Section */}
//       <div>
//         <h2 className='text-2xl font-bold mb-4'>Recent Activities</h2>
//         <ul>
//           {filteredActivities.map((activity, index) => (
//             <li key={index} className='mb-2 p-2 border-b'>
//               {activity}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Profile Update and Resume Upload Feedback */}
//       <div className='mt-6'>
//         {profileUpdated && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Profile successfully updated!
//           </div>
//         )}
//         {resumeUploaded && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Resume successfully uploaded!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Userdashboard;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Upload, Edit3 } from 'lucide-react'; // Importing icons from lucide-react

// const Userdashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [profileUpdated, setProfileUpdated] = useState(false);
//   const [resumeUploaded, setResumeUploaded] = useState(false);

//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleProfileUpdate = () => {
//     navigate('/user/profile/update'); // Navigate to the profile update page
//   };

//   const handleResumeUpload = () => {
//     navigate('/user/resume');
//   };

//   // Example data for recent activities
//   const activities = [
//     "Applied to Frontend Developer position",
//     "Saved Backend Developer job listing",
//     "Profile updated",
//     "Applied to Product Manager position"
//   ];

//   // Filter activities based on search term
//   const filteredActivities = activities.filter(activity =>
//     activity.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='p-6'>
//       {/* Welcome Section */}
//       <h1 className='text-3xl font-bold mb-4'>Hello, User!</h1>
//       <p className='text-gray-600'>
//         It's great to have you back.
//       </p>

//       {/* Search Bar */}
//       <div className='mb-6'>
//         <input
//           type='text'
//           placeholder='Search activities...'
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className='p-2 border rounded'
//         />
//       </div>

//       {/* Cards Section */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
//         <div className='p-4 bg-white rounded shadow'>
//           <Edit3 className='text-blue-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Update Profile</h2>
//           <p className='text-gray-600 mb-4'>Keep your profile information up to date.</p>
//           <button
//             onClick={handleProfileUpdate}
//             className='px-4 py-2 bg-blue-500 text-white rounded'
//           >
//             Update Profile
//           </button>
//         </div>
//         <div className='p-4 bg-white rounded shadow'>
//           <Upload className='text-green-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Update Resume</h2>
//           <p className='text-gray-600 mb-4'>Upload your latest resume to apply for jobs.</p>
//           <button
//             onClick={handleResumeUpload}
//             className='px-4 py-2 bg-green-500 text-white rounded'
//           >
//             Update Resume
//           </button>
//         </div>
//       </div>

//       {/* Activities Section */}
//       <div>
//         <h2 className='text-2xl font-bold mb-4'>Recent Activities</h2>
//         <ul>
//           {filteredActivities.map((activity, index) => (
//             <li key={index} className='mb-2 p-2 border-b'>
//               {activity}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Profile Update and Resume Upload Feedback */}
//       <div className='mt-6'>
//         {profileUpdated && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Profile successfully updated!
//           </div>
//         )}
//         {resumeUploaded && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Resume successfully uploaded!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Userdashboard;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Upload, Edit3 } from 'lucide-react'; // Importing icons from lucide-react
// import Sidebar from './Sidebar'; // Import the Sidebar component

// const Userdashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [profileUpdated, setProfileUpdated] = useState(false);
//   const [resumeUploaded, setResumeUploaded] = useState(false);

//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleProfileUpdate = () => {
//     navigate('/user/profile/update'); // Navigate to the profile update page
//   };

//   const handleResumeUpload = () => {
//     navigate('/user/resume');
//   };

//   // Example data for recent activities
//   const activities = [
//     "Applied to Frontend Developer position",
//     "Saved Backend Developer job listing",
//     "Profile updated",
//     "Applied to Product Manager position"
//   ];

//   // Filter activities based on search term
//   const filteredActivities = activities.filter(activity =>
//     activity.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='flex'>
//       <Sidebar />
//       <div className='flex-1 p-6'>
//         {/* Welcome Section */}
//         <h1 className='text-3xl font-bold mb-4'>Hello, User!</h1>
//         <p className='text-gray-600'>
//           It's great to have you back.
//         </p>

//         {/* Search Bar */}
//         <div className='mb-6'>
//           <input
//             type='text'
//             placeholder='Search activities...'
//             value={searchTerm}
//             onChange={handleSearchChange}
//             className='p-2 border rounded'
//           />
//         </div>

//         {/* Cards Section */}
//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
//           <div className='p-4 bg-white rounded shadow'>
//             <Edit3 className='text-blue-500 mb-2' size={32} />
//             <h2 className='text-xl font-bold mb-2'>Update Profile</h2>
//             <p className='text-gray-600 mb-4'>Keep your profile information up to date.</p>
//             <button
//               onClick={handleProfileUpdate}
//               className='px-4 py-2 bg-blue-500 text-white rounded'
//             >
//               Update Profile
//             </button>
//           </div>
//           <div className='p-4 bg-white rounded shadow'>
//             <Upload className='text-green-500 mb-2' size={32} />
//             <h2 className='text-xl font-bold mb-2'>Update Resume</h2>
//             <p className='text-gray-600 mb-4'>Upload your latest resume to apply for jobs.</p>
//             <button
//               onClick={handleResumeUpload}
//               className='px-4 py-2 bg-green-500 text-white rounded'
//             >
//               Update Resume
//             </button>
//           </div>
//         </div>

//         {/* Activities Section */}
//         <div>
//           <h2 className='text-2xl font-bold mb-4'>Recent Activities</h2>
//           <ul>
//             {filteredActivities.map((activity, index) => (
//               <li key={index} className='mb-2 p-2 border-b'>
//                 {activity}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Profile Update and Resume Upload Feedback */}
//         <div className='mt-6'>
//           {profileUpdated && (
//             <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//               Profile successfully updated!
//             </div>
//           )}
//           {resumeUploaded && (
//             <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//               Resume successfully uploaded!
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Userdashboard;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Upload, Edit3 } from 'lucide-react'; // Importing icons from lucide-react

// const Userdashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [profileUpdated, setProfileUpdated] = useState(false);
//   const [resumeUploaded, setResumeUploaded] = useState(false);

//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleProfileUpdate = () => {
//     navigate('/user/profile/update'); // Navigate to the profile update page
//   };

//   const handleResumeUpload = () => {
//     navigate('/user/resume');
//   };

//   // Example data for recent activities
//   const activities = [
//     "Applied to Frontend Developer position",
//     "Saved Backend Developer job listing",
//     "Profile updated",
//     "Applied to Product Manager position"
//   ];

//   // Filter activities based on search term
//   const filteredActivities = activities.filter(activity =>
//     activity.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='flex-1 p-6'>
//       {/* Welcome Section */}
//       <h1 className='text-3xl font-bold mb-4'>Hello, User!</h1>
//       <p className='text-gray-600'>
//         It's great to have you back.
//       </p>

//       {/* Search Bar */}
//       <div className='mb-6'>
//         <input
//           type='text'
//           placeholder='Search activities...'
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className='p-2 border rounded'
//         />
//       </div>

//       {/* Cards Section */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
//         <div className='p-4 bg-white rounded shadow'>
//           <Edit3 className='text-blue-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Update Profile</h2>
//           <p className='text-gray-600 mb-4'>Keep your profile information up to date.</p>
//           <button
//             onClick={handleProfileUpdate}
//             className='px-4 py-2 bg-blue-500 text-white rounded'
//           >
//             Update Profile
//           </button>
//         </div>
//         <div className='p-4 bg-white rounded shadow'>
//           <Upload className='text-green-500 mb-2' size={32} />
//           <h2 className='text-xl font-bold mb-2'>Upload Resume</h2>
//           <p className='text-gray-600 mb-4'>Upload your latest resume to apply for jobs.</p>
//           <button
//             onClick={handleResumeUpload}
//             className='px-4 py-2 bg-green-500 text-white rounded'
//           >
//             Update Resume
//           </button>
//         </div>
//       </div>

//       {/* Activities Section */}
//       <div>
//         <h2 className='text-2xl font-bold mb-4'>Search Jobs</h2>
//         <ul>
//           {filteredActivities.map((activity, index) => (
//             <li key={index} className='mb-2 p-2 border-b'>
//               {activity}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Profile Update and Resume Upload Feedback */}
//       <div className='mt-6'>
//         {profileUpdated && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Profile successfully updated!
//           </div>
//         )}
//         {resumeUploaded && (
//           <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
//             Resume successfully uploaded!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Userdashboard;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Edit3 } from 'lucide-react'; // Importing icons from lucide-react

const Userdashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleProfileUpdate = () => {
    setProfileUpdated(true);
    setResumeUploaded(false);
    navigate('/user/profile/update'); // Navigate to the profile update page
  };

  const handleResumeUpload = () => {
    setResumeUploaded(true);
    setProfileUpdated(false);
    navigate('/user/resume');
  };

  // Example data for recent activities
  const activities = [
    "Applied to Frontend Developer position",
    "Saved Backend Developer job listing",
    "Profile updated",
    "Applied to Product Manager position"
  ];

  // Filter activities based on search term
  const filteredActivities = activities.filter(activity =>
    activity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex-1 p-6'>
      {/* Welcome Section */}
      <h1 className='text-3xl font-bold mb-4'>Hello, User!</h1>
      <p className='text-gray-600'>
        It's great to have you back.
      </p>

      {/* Search Bar */}
      <div className='mb-6'>
        <input
          type='text'
          placeholder='Search activities...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='p-2 border rounded'
        />
      </div>

      {/* Cards Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
        <div className='p-4 bg-white rounded shadow'>
          <Edit3 className='text-blue-500 mb-2' size={32} />
          <h2 className='text-xl font-bold mb-2'>Update Profile</h2>
          <p className='text-gray-600 mb-4'>Keep your profile information up to date.</p>
          <button
            onClick={handleProfileUpdate}
            className='px-4 py-2 bg-blue-500 text-white rounded'
          >
            Update Profile
          </button>
        </div>
        <div className='p-4 bg-white rounded shadow'>
          <Upload className='text-green-500 mb-2' size={32} />
          <h2 className='text-xl font-bold mb-2'>Upload Resume</h2>
          <p className='text-gray-600 mb-4'>Upload your latest resume to apply for jobs.</p>
          <button
            onClick={handleResumeUpload}
            className='px-4 py-2 bg-green-500 text-white rounded'
          >
            Upload Resume
          </button>
        </div>
      </div>

      {/* Activities Section */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Recent Activities</h2>
        <ul>
          {filteredActivities.map((activity, index) => (
            <li key={index} className='mb-2 p-2 border-b'>
              {activity}
            </li>
          ))}
        </ul>
      </div>

      {/* Profile Update and Resume Upload Feedback */}
      <div className='mt-6'>
        {profileUpdated && (
          <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
            Profile successfully updated!
          </div>
        )}
        {resumeUploaded && (
          <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded'>
            Resume successfully uploaded!
          </div>
        )}
      </div>
    </div>
  );
};

export default Userdashboard;
