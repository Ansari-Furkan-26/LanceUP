import React from 'react';

const Event = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h2 className="text-3xl bg-gray-900 font-semibold mb-8">Join Upcoming Event</h2>
      <div className="space-y-6 w-full bg-gray-900 max-w-6xl">
        {/* Course Card 1 */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex justify-between items-center border border-gray-700">
            <div className='bg-gray-800'>
              <h3 className="text-xl font-medium mb-2 bg-gray-800">Event Name</h3>
              <p className="text-sm text-gray-400 bg-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <button className="ml-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">
              Join for free
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
