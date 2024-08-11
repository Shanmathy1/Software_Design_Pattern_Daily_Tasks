import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, Heart, Upload } from 'lucide-react'; // Importing icons from lucide-react

const Sidebar = () => {
  return (
    <div className='w-64 h-full bg-gray-800 text-white p-6'>
      <h2 className='text-2xl font-bold mb-6'>Dashboard</h2>
      <ul>
        <li className='mb-4'>
          <Link to='/' className='flex items-center'>
            <Home className='mr-2' />
            Home
          </Link>
        </li>
        <li className='mb-4'>
          <Link to='/user/profile' className='flex items-center'>
            <User className='mr-2' />
            Profile
          </Link>
        </li>
        <li className='mb-4'>
          <Link to='/user/jobs' className='flex items-center'>
            <Briefcase className='mr-2' />
            Jobs
          </Link>
        </li>
        <li className='mb-4'>
          <Link to='/user/saved' className='flex items-center'>
            <Heart className='mr-2' />
            Saved
          </Link>
        </li>
        <li className='mb-4'>
          <Link to='/user/resume' className='flex items-center'>
            <Upload className='mr-2' />
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
