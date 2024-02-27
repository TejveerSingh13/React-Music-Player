import React from "react";
import Sidebar from "../../components/sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="main-body">
      <Sidebar />
      {children} {/* Render the current route's component here */}
    </div>
  );
};

export default MainLayout;
