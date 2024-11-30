import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar bg-base-300">
      <div className="navbar justify-center">
        <ul className="menu menu-horizontal gap-8 text-lg font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-gray-200 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/AddSymptons"
              className="hover:text-gray-200 transition duration-300"
            >
              Enter Symptoms
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
