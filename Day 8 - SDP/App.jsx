
// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Web/Home'
// import Login from './pages/Web/Login'
// import Register from './pages/Web/Register'
// import UserLayout from './layout/UserLayout'
// import UserDashboard from './pages/User/UserDashboard'
// import AdminLayout from './layout/AdminLayout'
// import AdminDashboard from './pages/Admin/Admindashboard'
// import NotFound from './pages/Web/NotFound'
// import HomeLayout from './layout/Weblayout'




// const App = () => {
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route element={<HomeLayout />}>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/login' element={<Login />} />
//                         <Route path='/register' element={<Register />} />
//                     </Route>

//                     <Route element={<UserLayout />}>
//                         <Route path='/dashboard' element={<UserDashboard />} />
//                     </Route>
                    
//                     <Route element={<AdminLayout />}>
//                         <Route path='/admin/dashboard' element={<AdminDashboard />} />
//                     </Route>

//                     <Route path='*' element={<NotFound />} />
//                 </Routes>
//             </BrowserRouter>


//         </>
//     )
// }

// export default App




// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Web/Home';
// import Login from './pages/Web/Login';
// import Register from './pages/Web/Register';
// import UserLayout from './layout/UserLayout';
// import AdminLayout from './layout/AdminLayout';
// import NotFound from './pages/Web/NotFound';
// import HomeLayout from './layout/Weblayout';
// import Userdashboard from './pages/User/Userdashboard';
// import Admindashboard from './pages/Admin/Admindashboard';

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route element={<HomeLayout />}>
//             <Route path='/' element={<Home />} />
//             <Route path='/login' element={<Login />} />
//             <Route path='/register' element={<Register />} />
//           </Route>

//           <Route element={<UserLayout />}>
//             <Route path='/user/dashboard' element={<Userdashboard />} />
//           </Route>

//           <Route element={<AdminLayout />}>
//             <Route path='/admin/dashboard' element={< Admindashboard/>} />
//           </Route>

//           <Route path='*' element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './pages/Web/Home';
// import Login from './pages/Web/Login';
// import Register from './pages/Web/Register';
// import NotFound from './pages/Web/NotFound';

// import Weblayout from './layout/Weblayout';

// import Userlayout from './layout/UserLayout';

// import Adminlayout from './layout/AdminLayout';


// import Userjobs from './pages/User/Userjobs';
// import Userprofile from './pages/User/Userprofile';
// import UserResume from './pages/User/UserResume';


// import AdminUsers from './pages/Admin/AdminUsers';
// import AdminJobs from './pages/Admin/AdminJobs';
// import Admindashboard from './pages/Admin/Admindashboard';
// import Userdashboard from './pages/User/Userdashboard';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
      
//         <Route element={<Weblayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Route>

//         <Route element={<Adminlayout />}>
        
//           <Route path="/admindashboard" element={<Admindashboard/>}
//           <Route path="/admin/users" element={<AdminUsers />} />
//           <Route path="/admin/jobs" element={<AdminJobs />} />
//         </Route>

        
//         <Route element={<Userlayout />}>
        
//           <Route path="/userdashboard" element={<Userdashboard/>}
//           <Route path="/user/jobs" element={<Userjobs />} />
//           <Route path="/user/profile" element={<Userprofile />} />
//           <Route path="/user/resume" element={<UserResume />} />
//         </Route>

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './pages/Web/Home';
// import Login from './pages/Web/Login';
// import Register from './pages/Web/Register';
// import NotFound from './pages/Web/NotFound';

// import Weblayout from './layout/Weblayout';
// import Userlayout from './layout/UserLayout';
// import Adminlayout from './layout/AdminLayout';

// import Userjobs from './pages/User/Userjobs';
// import Userprofile from './pages/User/Userprofile';
// import UserResume from './pages/User/UserResume';

// import AdminUsers from './pages/Admin/AdminUsers';
// import AdminJobs from './pages/Admin/AdminJobs';
// import Admindashboard from './pages/Admin/Admindashboard';
// import Userdashboard from './pages/User/Userdashboard';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Web Routes */}
//         <Route element={<Weblayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Route>

//         {/* Admin Routes */}
//         <Route element={<Adminlayout />}>
//           <Route path="/admindashboard" element={<Admindashboard />} />
//           {/* <Route path="/admin/users" element={<AdminUsers />} />
//           <Route path="/admin/jobs" element={<AdminJobs />} /> */}
//         </Route>

//         {/* User Routes */}
//         <Route element={<Userlayout />}>
//           <Route path="/userdashboard" element={<Userdashboard />} />
//           <Route path="/user/jobs" element={<Userjobs />} />
//           <Route path="/user/profile" element={<Userprofile />} />
//           <Route path="/user/resume" element={<UserResume />} />
//         </Route>

//         {/* Catch-all route */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;





// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Web/Home';
// import Login from './pages/Web/Login';
// import Register from './pages/Web/Register';
// import NotFound from './pages/Web/NotFound';
// import Weblayout from './layout/Weblayout';
// import Userjobs from './pages/User/Userjobs';
// import UserResume from './pages/User/UserResume';
// import AdminUsers from './pages/Admin/AdminUsers';
// import AdminJobs from './pages/Admin/AdminJobs';
// import Admindashboard from './pages/Admin/Admindashboard';
// import Adminlayout from './layout/AdminLayout';
// import Userlayout from './layout/UserLayout';
// import EditProfile from './pages/User/Editprofile';
// import Userdashboard from './pages/User/Userdashboard';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Weblayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Route>
//         <Route element={<Adminlayout />}>
//           <Route path="/admindashboard" element={<Admindashboard />} />
//           <Route path="/admin/users" element={<AdminUsers />} />
//           <Route path="/admin/jobs" element={<AdminJobs />} />
//         </Route>
//         <Route element={<Userlayout />}>
//           <Route path="/userdashboard" element={<Userdashboard />} />
//           <Route path="/user/jobs" element={<Userjobs />} />
//           <Route path="/user/resume" element={<UserResume />} />
//           <Route path="/user/profile/update" element={<EditProfile />} />
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;






import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Web/Home';
import Login from './pages/Web/Login';
import Register from './pages/Web/Register';
import NotFound from './pages/Web/NotFound';
import Weblayout from './layout/Weblayout';
import Userjobs from './pages/User/Userjobs';
import UserResume from './pages/User/UserResume';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminJobs from './pages/Admin/AdminJobs';
import Admindashboard from './pages/Admin/Admindashboard';
import Adminlayout from './layout/AdminLayout';
import Userlayout from './layout/UserLayout';
import EditProfile from './pages/User/Editprofile';
import Userdashboard from './pages/User/Userdashboard';
import Use from './pages/User/Use';
import Adminlogin from './pages/Admin/Adminlogin';
import AppliedJobs from './pages/User/Appliedjobs';
import JobSection from './pages/User/JobSection';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Weblayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<Adminlayout />}>
          <Route path="/admindashboard" element={<Admindashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/jobs" element={<AdminJobs />} />
          <Route path="/adminlogin" element={<Adminlogin />} />

        </Route>
        <Route element={<Userlayout />}>
          <Route path="/userdashboard" element={<Userdashboard />} />
          <Route path="/user/jobs" element={<Userjobs />} />
          <Route path="/user/resume" element={<UserResume />} />
          <Route path="/user/profile/update" element={<EditProfile />} />
          <Route path="/user/joblistings/applyjob" element={<AppliedJobs/>}/>
          <Route path="/user/applynow/jobsection" element={<JobSection/>}/>
          {/* <Route path="/user/use" element={<Use/>} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
