import React, { useState } from 'react';

const RegisterForm = () => {
  const [manualEntry, setManualEntry] = useState(false);

  return (
    <div className="bg-gray-900 text-gray-300  p-8 min-h-screen flex flex-col items-center">
      {/* Top Section: Buttons */}
      <div className="space-y-4 bg-gray-900">
        <button className="flex w-48 text-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded">Import from LinkedIn</button>
        <button className="flex w-48 item-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">&nbsp;Upload Your Resume</button>
        <button className="bg-gray-700 w-48 hover:bg-gray-800 text-white py-2 px-4 rounded" onClick={() => setManualEntry(!manualEntry)}>
          Fill Details Manually
        </button>
      </div>

      {/* Conditional: Fill Details Manually */}
      {manualEntry && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-900">
          <div><input type="text" placeholder="First Name" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><input type="text" placeholder="Last Name" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><input type="text" placeholder="Mobile" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><input type="email" placeholder="Email" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><input type="text" placeholder="Username" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><input type="text" placeholder="Company Name" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><input type="password" placeholder="Password" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><input type="password" placeholder="Confirm Password" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><input type="text" placeholder="Education Details" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><input type="text" placeholder="Company Details" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><input type="text" placeholder="Work Experience" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><input type="text" placeholder="Hiring Preferences" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" /></div>
        </div>
      )}

      {/* Bottom Section: Work or Hire */}
      <div className="mt-8 flex items-center space-x-4 bg-gray-900">
        <label className="flex items-center space-x-2 bg-gray-900">
          <input type="radio" name="role" className="text-green-600 " />I want to Work</label>
        <label className="flex items-center space-x-2 bg-gray-900">
          <input type="radio" name="role" className="text-yellow-600" />I want to Hire</label>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-8 rounded">SUBMIT</button>
      </div>
    </div>
  );
};

export default RegisterForm;
