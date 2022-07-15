import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ children }) => {
  const inputEl = useRef(null);

  return (
    <div class="drawer drawer-end">
      <input
        id="my-drawer-3"
        type="checkbox"
        ref={inputEl}
        class="drawer-toggle"
      />
      <div class="drawer-content flex flex-col">
        <div class="w-full navbar bg-slate-800 text-gray-400 lg:px-20">
          <div class="flex-1 px-2 mx-2 text-2xl">Doctor's Portal</div>
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
              <li>
                <NavLink to="/" className="rounded-lg">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="rounded-lg">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/appointment" className="rounded-lg">
                  Appointment
                </NavLink>
              </li>
              <li>
                <NavLink to="/review" className="rounded-lg">
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="rounded-lg">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li onClick={() => (inputEl.current.checked = false)}>
            <NavLink to="/" className="rounded-lg">
              Home
            </NavLink>
          </li>
          <li onClick={() => (inputEl.current.checked = false)}>
            <NavLink to="/about" className="rounded-lg">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/appointment" className="rounded-lg">
              Appointment
            </NavLink>
          </li>
          <li>
            <NavLink to="/review" className="rounded-lg">
              Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="rounded-lg">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
