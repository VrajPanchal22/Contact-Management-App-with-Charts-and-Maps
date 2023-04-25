import React from "react";
import Sidebar from "../organisms/Sidebar";
import { Outlet } from "react-router";
import { useLocation } from "react-router";

export default function Main() {
  const location = useLocation();
  return (
    <>
      <header
      
        className="text-center p-4 bg-header-bgcolor text-white text-2xl font-bold "

      >
        {location?.pathname === "/charts-and-maps"
          ? "Charts and Maps"
          : "Contact Page"}
      </header> 
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
