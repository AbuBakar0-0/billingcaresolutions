import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl text-primary font-semibold transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative transition-transform duration-300 ease-in-out`}>
        <div className="p-4">
          <img src="./assets/BCS Logo billingcaresolutions.com.svg" className="py-4" alt="Logo" />
          <hr />
          <nav className="mt-6">
            <Link to="/headers" className="block py-2.5 px-4 rounded hover:bg-secondary hover:text-white" onClick={toggleSidebar}>Headers</Link>
            <Link to="/profile" className="block py-2.5 px-4 rounded hover:bg-secondary hover:text-white" onClick={toggleSidebar}>Profile</Link>
            <Link to="/settings" className="block py-2.5 px-4 rounded hover:bg-secondary hover:text-white" onClick={toggleSidebar}>Settings</Link>
            <Link to="/logout" className="block py-2.5 px-4 rounded hover:bg-secondary hover:text-white" onClick={toggleSidebar}>Logout</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
