import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between">
        <div className="flex">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex gap-4">
          <ul>
            <Link to='/'>Home</Link>
          </ul>
          <ul>
            <Link to='/'>Home</Link>
          </ul>
          <ul>
            <Link to='/'>Home</Link>
          </ul>
          <ul>
            <Link to='/'>Home</Link>
          </ul>
        </div>
        <div className="flex-none gap-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
          <Link to='/register'><button className="btn btn-outline">Register</button></Link>

        </div>
      </div>
    </div>
  );
}

export default Navbar;