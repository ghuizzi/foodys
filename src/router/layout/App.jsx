import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/NavBar/Nav";

function Layout() {
  return (
    <div>
      <div>
        <Nav />;
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
