import React from 'react';
import Logo from '../assets/discord_main_logo.svg';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="w-full mx-auto bg-ultraBlue text-white">
      <div className="flex flex-row justify-between items-center  mx-auto py-6 w-10/12 ">
        <a href="https://discord.com">
          <img src={Logo} alt="discord" />
        </a>

        <div className="text-white font-bold space-x-10 hidden lg:block">
          <Link to="/download" className="hover:underline">
            Download
          </Link>
          <Link to="/nitro" className="hover:underline" >
            Nitro
          </Link>
          <Link to="/safety" className="hover:underline">
            Safety
          </Link>
          <Link to="/support" className="hover:underline">
            Support
          </Link>
          <Link to="/blogs" className="hover:underline">
            Blog
          </Link>
          <Link to="/careers" className="hover:underline">
            Careers
          </Link>
        </div>
       <div>
          <Link
            to="/login"
            className="bg-white text-sm text-gray-900 hover:text-ultraBlue px-4 py-2.5 rounded-full  hover:shadow-lg  transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
