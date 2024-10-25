import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './Headers';
import SidePanel from './../../components/Dashboard/SidePanel';
import AllBlogs from './AllBlogs';


const Dashboard = () => {
  return (
    <Router>
      <div className="flex">
        <SidePanel />
        <div className="flex-1">
          <Routes>
            <Route path="/headers" element={<Headers />} />
            <Route path="/allblogs" element={<AllBlogs />} />
            {/* <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
