import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Navbar = ({ dark, setDark, children }) => {
  const [admin] = useAdmin();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* //TODO:<!-- Navbar --> */}
        <div
          class={`w-full navbar ${
            dark
              ? "bg-gradient-to-r from-[#ebb5b5] to-[#f0bef7]"
              : "bg-gradient-to-r from-[#1dbde6] to-[#f1515e]"
          } fixed top-0 z-40  md:px-10 drop-shadow-2xl`}
        >
          {pathname.includes("dashboard") && (
            <label
              For="my-drawer-2"
              tabIndex={0}
              className="btn btn-ghost btn-circle lg:hidden"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          )}
          <div
            data-aos="fade-up-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="flex-1 px-2 mx-2 text-2xl hover:cursor-pointer"
          >
            <Link to="/">
              <span> Heal-Scape</span>
            </Link>
          </div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal gap-x-2">
              {/* TODO:<!-- Navbar menu content here -->  */}
              <li>
                <NavLink to="/" className="rounded-lg">
                  Home
                </NavLink>
              </li>
              {admin && (
                <li>
                  <NavLink to="/dashboard/add-admin" className="rounded-lg">
                    Dashboard
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to="/services" className="rounded-lg">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="rounded-lg">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="rounded-lg">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="rounded-lg">
                  Login
                </NavLink>
              </li>

              <li class="dropdown dropdown-end dropdown-hover">
                <label
                  tabindex="0"
                  class={`"btn-outline rounded-lg btn ${
                    dark ? "bg-teal-600 hover:bg" : "bg-orange-500"
                  } text-white border-gray-200 capitalize"`}
                >
                  <span>Book Now</span>
                </label>
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink to="/about">Quick-Book</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Pre-Book</NavLink>
                  </li>
                </ul>
              </li>
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="rounded-lg"
                  onClick={() => setDark(!dark)}
                />

                <svg
                  className="swap-on fill-current w-7 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg
                  className="swap-off fill-current w-7 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-----------------TODO: Mobile Sidebar content here ------------------> */}
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {admin && (
            <li>
              <NavLink to="/dashboard/add-admin" className="rounded-lg">
                Dashboard
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="rounded-lg">
              Login
            </NavLink>
          </li>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">Book Now</div>

            <div className="collapse-content">
              <li>
                <Link to="/about">Quick-Book</Link>
              </li>
              <li>
                <Link to="/contact">Pre-Book</Link>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
