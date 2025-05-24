import React from 'react';

const Details = () => {
  return (
    <div className="h-[100vh] bg-white border-t-0 rounded-lg shadow-lg p-4 font-sans text-sm w-full overflow-hidden">
      
      <div className="mb-4">
        <div className='flex justify-between py-2'>
          <p className="text-gray-500">Assignee</p>
          <p className="text-black font-medium">Brian Byrne</p>
        </div>
        <div className='flex justify-between'>
          <p className="text-gray-500 mt-2">Team</p>
          <p className="text-black font-medium">Unassigned</p>
        </div>
      </div>

      {/* Links */}
      <div className="mb-4">
        <p className="font-medium text-gray-700 mb-2">LINKS</p>
        <div className="flex justify-between mb-1">
          <span>📌 Tracker ticket</span>
          <button className="text-blue-600 font-bold">+</button>
        </div>
        <div className="flex justify-between mb-1">
          <span>📄 Back-office tickets</span>
          <button className="text-blue-600 font-bold">+</button>
        </div>
        <div className="flex justify-between mb-1">
          <span>↗ Side conversations</span>
          <button className="text-blue-600 font-bold">+</button>
        </div>
      </div>

      {/* Sections */}
      {[
        'USER DATA',
        'CONVERSATION ATTRIBUTES',
        'COMPANY DETAILS',
        'SALESFORCE',
        'STRIPE',
        'JIRA FOR TICKETS',
      ].map((item , index) => (
        <div key={index} className="border-t py-2">
          <p className="text-gray-700 font-medium">{item}</p>
          <p className="text-gray-500 mt-1">[Details shown here]</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
