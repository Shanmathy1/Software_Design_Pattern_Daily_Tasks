// // import React, { useState } from 'react';
// // import { User, Mail, Lock, Phone, Home } from 'lucide-react'; // Importing icons from lucide-react

// // const UserProfileUpdate = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [resume, setResume] = useState(null);
// //   const [phone, setPhone] = useState('');
// //   const [address, setAddress] = useState('');

// //   const handleFileChange = (event) => {
// //     const selectedFile = event.target.files[0];
// //     if (selectedFile && selectedFile.type === 'application/pdf') {
// //       setResume(selectedFile);
// //     } else {
// //       alert('Please upload a PDF file.');
// //     }
// //   };

// //   const handleUpdate = () => {
// //     // Logic to update profile details
// //     console.log('Profile updated:', { name, email, password, resume, phone, address });
// //   };

// //   return (
// //     <div className='p-6'>
// //       <h1 className='text-3xl font-bold mb-4'>Update Profile</h1>
// //       <form>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Name</label>
// //           <div className='flex items-center'>
// //             <User className='text-gray-500 mr-2' />
// //             <input
// //               type='text'
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               className='p-2 border rounded w-full'
// //             />
// //           </div>
// //         </div>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Email</label>
// //           <div className='flex items-center'>
// //             <Mail className='text-gray-500 mr-2' />
// //             <input
// //               type='email'
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className='p-2 border rounded w-full'
// //             />
// //           </div>
// //         </div>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Password</label>
// //           <div className='flex items-center'>
// //             <Lock className='text-gray-500 mr-2' />
// //             <input
// //               type='password'
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className='p-2 border rounded w-full'
// //             />
// //           </div>
// //         </div>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Phone</label>
// //           <div className='flex items-center'>
// //             <Phone className='text-gray-500 mr-2' />
// //             <input
// //               type='text'
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               className='p-2 border rounded w-full'
// //             />
// //           </div>
// //         </div>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Address</label>
// //           <div className='flex items-center'>
// //             <Home className='text-gray-500 mr-2' />
// //             <input
// //               type='text'
// //               value={address}
// //               onChange={(e) => setAddress(e.target.value)}
// //               className='p-2 border rounded w-full'
// //             />
// //           </div>
// //         </div>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Resume</label>
// //           <input type='file' accept='application/pdf' onChange={handleFileChange} />
// //         </div>
// //         <button
// //           type='button'
// //           onClick={handleUpdate}
// //           className='px-4 py-2 bg-blue-500 text-white rounded'
// //         >
// //           Update Profile
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default UserProfileUpdate;



// // import React, { useState } from 'react';
// // import { User, Mail, Lock, Phone, Home } from 'lucide-react'; // Importing icons from lucide-react

// // const UserProfileUpdate = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [resume, setResume] = useState(null);
// //   const [phone, setPhone] = useState('');
// //   const [address, setAddress] = useState('');

// //   const handleFileChange = (event) => {
// //     const selectedFile = event.target.files[0];
// //     if (selectedFile && selectedFile.type === 'application/pdf') {
// //       setResume(selectedFile);
// //     } else {
// //       alert('Please upload a PDF file.');
// //     }
// //   };

// //   const handleUpdate = () => {
// //     // Logic to update profile details
// //     console.log('Profile updated:', { name, email, password, resume, phone, address });
// //   };

// //   return (
// //     <div className='p-6'>
// //       <h1 className='text-3xl font-bold mb-4'>Update Profile</h1>
// //       <form>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Name</label>
// //           <div className='flex items-center'>
// //             <User className='text-gray-500 mr-2' />
// //             <input
// //               type='text'
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               className='p-2 border rounded w-full'
// //             />
// //           </div>
// //         </div>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Email</label>
// //           <div className='flex items-center'>
// //             <Mail className='text-gray-500 mr-2' />
// //             <input
// //               type='email'
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className='p-2 border rounded w-full'
// //             />
// //           </div>
// //         </div>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Password</label>
// //           <div className='flex items-center'>
// //             <Lock className='text-gray-500 mr-2' />
// //             <input
// //               type='password'
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className='p-2 border rounded w-full'
// //             />
// //           </div>
// //         </div>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Phone</label>
// //           <div className='flex items-center'>
// //             <Phone className='text-gray-500 mr-2' />
// //             <input
// //               type='text'
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               className='p-2 border rounded w-full'
// //             />
// //           </div>
// //         </div>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Address</label>
// //           <div className='flex items-center'>
// //             <Home className='text-gray-500 mr-2' />
// //             <input
// //               type='text'
// //               value={address}
// //               onChange={(e) => setAddress(e.target.value)}
// //               className='p-2 border rounded w-full'
// //             />
// //           </div>
// //         </div>
// //         <div className='mb-4'>
// //           <label className='block text-gray-700 mb-2'>Resume</label>
// //           <input type='file' accept='application/pdf' onChange={handleFileChange} />
// //         </div>
// //         <button
// //           type='button'
// //           onClick={handleUpdate}
// //           className='px-4 py-2 bg-blue-500 text-white rounded'
// //         >
// //           Update Profile
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default UserProfileUpdate;




// import React, { useState } from 'react';
// import { User, Mail, Lock, Phone, Home, UploadCloud } from 'lucide-react'; // Importing icons

// const UserProfileUpdate = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [resume, setResume] = useState(null);
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile && selectedFile.type === 'application/pdf') {
//       setResume(selectedFile);
//     } else {
//       alert('Please upload a PDF file.');
//     }
//   };

//   const handleUpdate = () => {
//     // Logic to update profile details
//     console.log('Profile updated:', { name, email, password, resume, phone, address });
//     alert('Profile successfully updated!');
//   };

//   return (
//     <div className='p-6 max-w-lg mx-auto'>
//       <h1 className='text-3xl font-bold mb-4'>Update Profile</h1>
//       <form>
//         <div className='mb-4'>
//           <label className='block text-gray-700 mb-2'>Name</label>
//           <div className='flex items-center'>
//             <User className='text-gray-500 mr-2' />
//             <input
//               type='text'
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className='p-2 border rounded w-full'
//             />
//           </div>
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700 mb-2'>Email</label>
//           <div className='flex items-center'>
//             <Mail className='text-gray-500 mr-2' />
//             <input
//               type='email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className='p-2 border rounded w-full'
//             />
//           </div>
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700 mb-2'>Password</label>
//           <div className='flex items-center'>
//             <Lock className='text-gray-500 mr-2' />
//             <input
//               type='password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className='p-2 border rounded w-full'
//             />
//           </div>
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700 mb-2'>Phone</label>
//           <div className='flex items-center'>
//             <Phone className='text-gray-500 mr-2' />
//             <input
//               type='text'
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className='p-2 border rounded w-full'
//             />
//           </div>
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700 mb-2'>Address</label>
//           <div className='flex items-center'>
//             <Home className='text-gray-500 mr-2' />
//             <input
//               type='text'
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className='p-2 border rounded w-full'
//             />
//           </div>
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700 mb-2'>Update Resume</label>
//           <div className='flex items-center'>
//             <UploadCloud className='text-gray-500 mr-2' />
//             <input type='file' accept='application/pdf' onChange={handleFileChange} />
//           </div>
//         </div>
//         <button
//           type='button'
//           onClick={handleUpdate}
//           className='px-4 py-2 bg-blue-500 text-white rounded'
//         >
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UserProfileUpdate;





import React, { useState } from 'react';
import { User, Mail, Lock, Phone, Home, UploadCloud, Edit } from 'lucide-react'; // Importing icons

const UserProfileUpdate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resume, setResume] = useState(null);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [feedback, setFeedback] = useState({ name: '', email: '', jobTitle: '', location: '', jobExperience: '', message: '' });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setResume(selectedFile);
    } else {
      alert('Please upload a PDF file.');
    }
  };

  const handleUpdate = () => {
    // Logic to update profile details
    console.log('Profile updated:', { name, email, password, resume, phone, address });
    alert('Profile successfully updated!');
  };

  const toggleFeedbackForm = () => {
    setFeedbackVisible(!feedbackVisible);
  };

  const handleFeedbackChange = (event) => {
    const { name, value } = event.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    setFeedbackSubmitted(true);
    setFeedback({ name: '', email: '', jobTitle: '', location: '', jobExperience: '', message: '' });
    setTimeout(() => setFeedbackSubmitted(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className='flex p-6 max-w-screen-lg mx-auto'>
      {/* Profile Update Form */}
      <div className='flex-1 mr-4'>
        <h1 className='text-3xl font-bold mb-4'>Update Profile</h1>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Name</label>
            <div className='flex items-center'>
              <User className='text-gray-500 mr-2' />
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='p-2 border rounded w-full'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Email</label>
            <div className='flex items-center'>
              <Mail className='text-gray-500 mr-2' />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='p-2 border rounded w-full'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Password</label>
            <div className='flex items-center'>
              <Lock className='text-gray-500 mr-2' />
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='p-2 border rounded w-full'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Phone</label>
            <div className='flex items-center'>
              <Phone className='text-gray-500 mr-2' />
              <input
                type='text'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='p-2 border rounded w-full'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Address</label>
            <div className='flex items-center'>
              <Home className='text-gray-500 mr-2' />
              <input
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='p-2 border rounded w-full'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Update Resume</label>
            <div className='flex items-center'>
              <UploadCloud className='text-gray-500 mr-2' />
              <input type='file' accept='application/pdf' onChange={handleFileChange} />
            </div>
          </div>
          <button
            type='button'
            onClick={handleUpdate}
            className='px-4 py-2 bg-blue-500 text-white rounded'
          >
            Update Profile
          </button>
        </form>
      </div>

      {/* Feedback Section */}
      <div className='flex-none w-80'>
        <button
          onClick={toggleFeedbackForm}
          className='flex items-center text-blue-500 hover:underline'
        >
          <Edit className='mr-2' size={24} />
          {feedbackVisible ? 'Hide Feedback Form' : 'Fill out Feedback'}
        </button>

        {feedbackVisible && (
          <div className='mt-4 p-4 bg-gray-100 rounded shadow'>
            {feedbackSubmitted ? (
              <div className='p-2 mb-4 text-sm text-green-700 bg-green-100 rounded'>
                Thank you for your feedback!
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className='space-y-4'>
                <div>
                  <label className='block text-gray-700 mb-1 text-sm'>Name</label>
                  <input
                    type='text'
                    name='name'
                    value={feedback.name}
                    onChange={handleFeedbackChange}
                    className='p-2 border rounded w-full'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 mb-1 text-sm'>Email</label>
                  <input
                    type='email'
                    name='email'
                    value={feedback.email}
                    onChange={handleFeedbackChange}
                    className='p-2 border rounded w-full'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 mb-1 text-sm'>Job Title</label>
                  <input
                    type='text'
                    name='jobTitle'
                    value={feedback.jobTitle}
                    onChange={handleFeedbackChange}
                    className='p-2 border rounded w-full'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 mb-1 text-sm'>Location</label>
                  <input
                    type='text'
                    name='location'
                    value={feedback.location}
                    onChange={handleFeedbackChange}
                    className='p-2 border rounded w-full'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 mb-1 text-sm'>Job Experience (years)</label>
                  <input
                    type='text'
                    name='jobExperience'
                    value={feedback.jobExperience}
                    onChange={handleFeedbackChange}
                    className='p-2 border rounded w-full'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 mb-1 text-sm'>Feedback</label>
                  <textarea
                    name='message'
                    value={feedback.message}
                    onChange={handleFeedbackChange}
                    className='p-2 border rounded w-full'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='px-4 py-2 bg-blue-500 text-white rounded text-sm'
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileUpdate;
