import React from "react";
import Container from "./Container";
const Navbar = () => {
  return (
    <div className="bg-gray-200 shadow-sm py-2">
      {" "}
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 py-2  shadow"
              >
                <li className="bg-[#422AD5] text-white">
                  <a>Home</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className=" text-xl lexend text-nowrap font-semibold">
              CS --Ticket
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-2 space-x-2 font-semibold">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
            <div className="">
              <a className="btn bg-linear-to-br from-blue-500 to-[#422AD5] border-0">
                <span className="text-gray-200">+</span>
                <span className="text-white roboto">New Ticket</span>
              </a>
            </div>
          </div>
          <div className="navbar-end lg:hidden ">
            <a className="btn bg-linear-to-br from-blue-500 to-[#422AD5] border-0">
              <span className="text-gray-200">+</span>
              <span className="text-white roboto">New Ticket</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
