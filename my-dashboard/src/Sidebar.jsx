import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#overview" className="hover:text-gray-400">Overview</a>
          </li>
          <li className="mb-4">
            <a href="#reports" className="hover:text-gray-400">Reports</a>
          </li>
          <li className="mb-4">
            <a href="#analytics" className="hover:text-gray-400">Analytics</a>
          </li>
          <li className="mb-4">
            <a href="#settings" className="hover:text-gray-400">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;