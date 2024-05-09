import React from "react";
import { Outlet , Link } from "react-router-dom";
import "../Styles/homeScreen.css";
import link from "../assets/Vector.png";

// this will be my layout where i will have header and the login portion
export default function MainLayout() {
  return (
    <div>
      <div className="subheader">
        <div className="subheader-left">
          <img className="link" src={link} alt="Logo" />
          <Link to={'/'} className="shorturl"> SHORT.URL</Link>
        </div>
        <div className="subheader-right">
          <Link to={'/login'} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">Login</Link>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}
