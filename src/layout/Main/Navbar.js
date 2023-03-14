import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className='h-14 bg-green-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <div className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-green-900'>
        <h1 className="font-bold">BlogR</h1>
        <ul className="flex gap-4">
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
