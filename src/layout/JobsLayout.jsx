import React from "react";
import { Outlet } from "react-router-dom";

const JobsLayout = () => {
  return (
    <div>
      <h2>jobs openings</h2>
      <p>list of job openings in our company</p>
      <Outlet />
    </div>
  );
};

export default JobsLayout;
