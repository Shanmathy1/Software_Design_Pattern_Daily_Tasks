import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { BriefcaseBusiness, FileAxis3D } from 'lucide-react';
import { Layers } from 'lucide-react';

const Navbar = () => {
  const NavLinks = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Login',
      path: '/login'
    },
    {
      title: 'Register',
      path: '/register'
    }
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-[8vh] flex flex-row items-center shadow-sm shadow-primary/50 bg-blue-900 px-6">
      <div className="flex items-center gap-4 text-white flex-grow">
        <Layers className="text-white" />
        <div className="logo text-[25px] text-white" style={{ marginTop: '-0.5rem' }}>
          <strong>Job</strong>Finder
        </div>
      </div>
      <div className="flex-grow flex justify-end items-center gap-8 text-white">
        {NavLinks.map((links, index) => (
          <li key={index} className="list-none">
            <NavLink to={links.path} className="hover:text-gray-300">
              {links.title}
            </NavLink>
          </li>
        ))}
        <BriefcaseBusiness className="text-white" />
        <FileAxis3D className="text-white" />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
