import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dashboard Title</h1>
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-full mr-2"
        />
        <span className="font-semibold">Username</span>
      </div>
    </header>
  );
};

export default Header;
