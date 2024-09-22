import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white py-4 px-8 flex justify-between items-center">
      {/* Left side - Brand */}
      <Link to='/home'><div className="text-2xl font-bold">LanceUp</div></Link>

      {/* Middle - Navigation links */}
      <nav className="space-x-8 hidden md:flex">
        <Link to='/Courselist'><a href="#" className="hover:text-gray-400">Hunt Talent</a></Link>
        <Link to='/Event'><a href="#" className="hover:text-gray-400">Hunt Work</a></Link>
        <Link to='BidderShortlist'><a href="#" className="hover:text-gray-400">Why LanceUp</a></Link>
      </nav>

      {/* Right side - Search and Sign Up */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
          <input type="text" placeholder="Search" className="bg-gray-800 text-white px-2 py-2 focus:outline-none"/>
          <select className="bg-gray-800 text-white px-2 py-1 focus:outline-none">
            <option>Talent</option>
            <option>Work</option>
          </select>
          <Link to='/JobList'><button className="text-blue-500 bg-gray-800 px-2">🔍</button></Link>
        </div>

        <Link to='signup'><button className="bg-gray-800 text-white py-2 px-4 rounded-xl">Sign Up</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
