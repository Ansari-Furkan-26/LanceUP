// src/components/JobList.js
import React, { useState } from 'react';

const JobList = () => {
  const [selectedTab, setSelectedTab] = useState('Recommended');

    // State to manage heart fill
    const [isFilled, setIsFilled] = useState(false);
  
    const toggleHeart = () => {
      setIsFilled(!isFilled); // Toggle the heart fill state
    };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <div className="w-full max-w-4xl  bg-gray-900">
        {/* Search Bar */}
        <div className="mb-8">
          <input type="text" placeholder="Search Jobs 🔍" className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-indigo-500"/>
        </div>

        {/* Tabs */}
        <div className="flex justify-center  bg-gray-900 space-x-4 mb-6">
          {['Recommended', 'Latest', 'Saved Jobs'].map((tab) => (
            <button key={tab} onClick={() => setSelectedTab(tab)} className={`px-4 py-2 rounded-lg border border-gray-700 ${
                selectedTab === tab ? 'bg-gray-800 text-indigo-400' : 'bg-gray-900 text-gray-500'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="space-y-6  bg-gray-900">
          {['Job 1', 'Job 2', 'Job 3'].map((job, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex justify-between items-center border border-gray-700">
              <div className='bg-gray-800'>
                <h3 className="text-xl font-medium bg-gray-800 mb-2">{job}</h3>
                <p className="text-sm text-gray-400 bg-gray-800">Bidder Description</p>
              </div>
              <div className="flex items-center bg-gray-800 space-x-4">
                <button onClick={toggleHeart} className="text-indigo-400 hover:text-indigo-600 transition">
                {isFilled ? (// Filled heart SVG
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" clipRule="evenodd" />
                    </svg>
                ) : (// Outlined heart SVG
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                )}
                </button>
                <button className="px-4 py-2 border border-gray-500 hover:bg-gray-700 text-white rounded-lg transition">Bid</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
