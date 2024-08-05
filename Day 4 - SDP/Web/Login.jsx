// import React from 'react';

// const LoginPage = () => {
//   return (
//     <section className="flex flex-col md:flex-row h-screen items-center">

//       <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
//         <img
//           src="https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1441&q=100"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
//         flex items-center justify-center">
//         <div className="w-full h-100">
//           {/* <h1 className="text-xl font-bold">Abstract UI</h1> */}

//           <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

//           <form className="mt-6" action="#" method="POST">
//             <div>
//               <label className="block text-gray-700" htmlFor="email">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter Email Address"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//                 autoFocus
//                 autoComplete="email"
//                 required
//               />
//             </div>

//             <div className="mt-4">
//               <label className="block text-gray-700" htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter Password"
//                 minLength="6"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//                 required
//               />
//             </div>

//             <div className="text-right mt-2">
//               <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
//             </div>

//             <button
//               type="submit"
//               className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
//             >
//               Log In
//             </button>
//           </form>

//           <hr className="my-6 border-gray-300 w-full" />

//           <button
//             type="button"
//             className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
//           >
//             <div className="flex items-center justify-center">
//               <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
//                 <defs>
//                   <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
//                 </defs>
//                 <clipPath id="b">
//                   <use xlinkHref="#a" overflow="visible" />
//                 </clipPath>
//                 <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
//                 <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
//                 <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
//                 <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
//               </svg>
//               <span className="ml-4">
//                 Log in
//                 with
//                 Google
//               </span>
//             </div>
//           </button>

//           <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</a></p>

//           {/* <p className="text-sm text-gray-500 mt-12">&copy; 2020 Abstract UI - All Rights Reserved.</p> */}
//         </div>
//       </div>

//     </section>
//   );
// }

// export default LoginPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Users, Eye, EyeOff } from 'lucide-react'; // Import the eye icons from lucide-react

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Example authentication logic (replace with your actual logic)
//     const isAuthenticated = await authenticateUser(email, password);

//     if (isAuthenticated) {
//       // Conditional navigation based on email
//       if (email === 'admin@gmail.com') {
//         navigate('/admin/dashboard');
//       } else {
//         navigate('/user/dashboard');
//       }
//     } else {
//       // Handle login failure (show error message)
//       alert('Invalid email or password');
//     }
//   };

//   // Simulate an authentication function
//   const authenticateUser = async (email, password) => {
//     // Replace this with actual API call or authentication logic
//     if ((email === 'admin@gmail.com' && password === 'admin@2004') || 
//         (email === 'user@gmail.com' && password === 'user@2006')) {
//       return true;
//     }
//     return false;
//   };

//   return (
//     <div className='h-screen flex items-center justify-center bg-gray-200'>
//       <div className='w-full max-w-md bg-white p-10 rounded-xl shadow-lg border border-gray-300'>
//         <div className='flex items-center justify-center mb-8'>
//           <Users className='h-10 w-10 text-black mr-3' /> {/* Users icon */}
//           <h2 className='text-3xl font-semibold text-gray-800'>Login</h2>
//         </div>
//         <form onSubmit={handleLogin}>
//           <div className='mb-6'>
//             <label htmlFor='email' className='block text-gray-700 text-sm font-medium mb-2'>Email</label>
//             <input
//               id='email'
//               type='email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder='Enter your email'
//               className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
//             />
//           </div>
//           <div className='mb-6 relative'>
//             <label htmlFor='password' className='block text-gray-700 text-sm font-medium mb-2'>Password</label>
//             <input
//               id='password'
//               type={showPassword ? 'text' : 'password'} // Toggle password visibility
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder='Enter your password'
//               className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12' // Adjust padding-right to make space for the icon
//             />
//             <button
//               type='button'
//               onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
//               className='absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer'
//             >
//               {showPassword ? <EyeOff className='h-5 w-5 text-gray-500' /> : <Eye className='h-5 w-5 text-gray-500' />}
//             </button>
//           </div>
//           <button
//             type='submit'
//             className='w-full bg-black text-white py-3 px-4 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500'
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Users, Eye, EyeOff } from 'lucide-react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const isAuthenticated = await authenticateUser(email, password);

//     if (isAuthenticated) {
//       if (email === 'admin@gmail.com') {
//         navigate('/admindashboard');
//       } else {
//         navigate('/userdashboard');
//       }
//     } else {
//       alert('Invalid email or password');
//     }
//   };

//   const authenticateUser = async (email, password) => {
//     if ((email === 'admin@gmail.com' && password === 'admin@2004') || 
//         (email === 'user@gmail.com' && password === 'user@2006')) {
//       return true;
//     }
//     return false;
//   };

//   return (
//     <section className="flex flex-col md:flex-row h-screen items-center">
//       <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
//         <img
//           src="https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1441&q=100"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
//         <div className="w-full h-100">
//           <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
//           <form className="mt-6" onSubmit={handleLogin}>
//             <div className='mb-6'>
//               <label htmlFor='email' className='block text-gray-700 text-sm font-medium mb-2'>Email</label>
//               <input
//                 id='email'
//                 type='email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder='Enter your email'
//                 className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
//               />
//             </div>
//             <div className='mb-6 relative'>
//               <label htmlFor='password' className='block text-gray-700 text-sm font-medium mb-2'>Password</label>
//               <input
//                 id='password'
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder='Enter your password'
//                 className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12'
//               />
//               <button
//                 type='button'
//                 onClick={() => setShowPassword(!showPassword)}
//                 className='absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer'
//               >
//                 {showPassword ? <EyeOff className='h-5 w-5 text-gray-500' /> : <Eye className='h-5 w-5 text-gray-500' />}
//               </button>
//             </div>
//             <div className="text-right mt-2">
//               <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
//             </div>
//             <button
//               type="submit"
//               className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
//             >
//               Log In
//             </button>
//           </form>
//           <hr className="my-6 border-gray-300 w-full" />
//           <button
//             type="button"
//             className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
//           >
//             <div className="flex items-center justify-center">
//               <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
//                 <defs>
//                   <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
//                 </defs>
//                 <clipPath id="b">
//                   <use xlinkHref="#a" overflow="visible" />
//                 </clipPath>
//                 <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
//                 <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
//                 <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
//                 <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
//               </svg>
//               <span className="ml-4">
//                 Log in with Google
//               </span>
//             </div>
//           </button>
//           <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</a></p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const isAuthenticated = await authenticateUser(email, password);

    if (isAuthenticated) {
      if (email === 'admin@gmail.com') {
        navigate('/admindashboard');
      } else {
        navigate('/userdashboard');
      }
    } else {
      alert('Invalid email or password');
    }
  };

  const authenticateUser = async (email, password) => {
    if ((email === 'admin@gmail.com' && password === 'admin@2004') || 
        (email === 'user@gmail.com' && password === 'user@2006')) {
      return true;
    }
    return false;
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1441&q=100"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
          <form className="mt-6" onSubmit={handleLogin}>
            <div className='mb-6'>
              <label htmlFor='email' className='block text-gray-700 text-sm font-medium mb-2'>Email</label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Enter your email'
                className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='mb-6 relative'>
              <label htmlFor='password' className='block text-gray-700 text-sm font-medium mb-2'>Password</label>
              <input
                id='password'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Enter your password'
                className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer'
              >
                {showPassword ? <EyeOff className='h-5 w-5 text-gray-500' /> : <Eye className='h-5 w-5 text-gray-500' />}
              </button>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>
          <hr className="my-6 border-gray-300 w-full" />
          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                <defs>
                  <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
              </svg>
              <span className="ml-4">
                Log in with Google
              </span>
            </div>
          </button>
          <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</a></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
