import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
      <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/recipe'>
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
            Recipe Hunter
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/recipe'
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              BLog
            </NavLink>
          </li>
          {isHovering && <li>{user.displayName}</li>}
          {user ? (
            <li className=' rounded-full flex  gap-2'>
              <img
                className='w-10 btn-circle'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                src={user?.photoURL}
              />
              <button onClick={logOut}>LogOut</button>

            </li>
          ) : (
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to='/login'>
              Login
            </NavLink>
          )}
        </ul>

        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/'>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Recipe Hunter
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/recipe' >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'

                      >
                        Blog
                      </Link>
                    </li>
                    {isHovering && <li>{user.displayName}</li>}

                    {user ? (
                      <div className='w-10 rounded-full flex me-12'>
                        <img
                          onMouseOver={handleMouseOver}
                          onMouseOut={handleMouseOut}
                          className='btn-circle'
                          src={user?.photoURL}
                        />
                        <button onClick={logOut}>LogOut</button>

                      </div>
                    ) : (
                      <Link

                        to='/login'
                      >
                        Login
                      </Link>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
