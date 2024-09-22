// src/components/BidderShortlist.js
import React from 'react';

const BidderShortlist = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h2 className="text-3xl bg-gray-900 font-semibold mb-8">Bidder Shortlist</h2>
      <div className="space-y-6 bg-gray-900 w-full max-w-4xl">
        {/* Bidder Cards */}
        {['Bidder 1', 'Bidder 2', 'Bidder 3'].map((bidder, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex justify-between items-center border border-gray-700">
            <div className='bg-gray-800'>
              <h3 className="text-xl bg-gray-800 font-medium mb-2">{bidder}</h3>
              <p className="text-sm bg-gray-800 text-gray-400">Bidder Description</p>
            </div>
            <button className="ml-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BidderShortlist;
