import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost gap-2 text-xl">
          <Heart className="h-6 w-6 text-emerald-600" />
          <span className="font-semibold">Arogya Vahini</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/predict">Predict</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0"
          >
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/predict">Predict</Link></li>
            <li><Link to="/chat">Chat with our AI assistant</Link></li>
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li><Link to="/chat">Chat with our AI assistant</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;