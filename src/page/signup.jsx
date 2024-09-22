import React from 'react';
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white">
        
      <div className="w-full max-w-sm overflow-y-hidden space-y-6 p-6 bg-gray-900 rounded-lg">
        <h1 className="text-3xl bg-gray-900 font-semibold text-center">Sign In</h1>
        <p className="text-center bg-gray-900 text-gray-400">Stay updated for freelancing opportunities</p>

    <div className="space-y-4 bg-gray-900">
        {/* Username Input */}
        <input type="text" placeholder="Username" className="w-full px-4 py-2 bg-black border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        {/* Password Input */}
        <input type="password" placeholder="Password" className="w-full px-4 py-2 bg-black border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        {/* Forgot Password */}
        <div className="text-right bg-gray-900">
        <a href="#" className="text-blue-500 bg-gray-900 hover:underline">Forgot password click here</a>
        </div>
    </div>

    {/* Sign In Button */}
    <Link to='/Home'><button className="w-full flex items-center mt-2 justify-center bg-green-700 text-white py-2 rounded-md hover:bg-green-800">➔ Sign In</button></Link>

    {/* Divider */}
    <div className="flex items-center bg-gray-900 justify-center space-x-2">
        <hr className="w-full border-gray-400" />
        <span className="text-gray-400 bg-gray-900">or</span>
        <hr className="w-full border-gray-400" />
    </div>

    {/* Google Sign In */}
    <Link to='/Registeration'><button className="w-full bg-red-800 py-2 rounded-md text-white hover:bg-red-900">
        Sign in with Google
    </button></Link>
      </div>
    </div>
  );
};

export default SignIn;
