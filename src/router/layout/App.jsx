import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/NavBar/Nav";
import "../../styles/app.css";
function Layout() {
  return (
    <div>
      <div className="navfix">
        <Nav />;
      </div>
      <div className="pagesfix">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
