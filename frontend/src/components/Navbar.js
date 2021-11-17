import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ContextStore } from "../context";
import { showLogin, showSignup } from "../reducers/assets";
import UserDropdown from "./UserDropdown";

export default function Navbar() {
  const state = useSelector((state) => ({ ...state.assets }));
  const { user, setToken } = useContext(ContextStore);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="Riyadh Tikets"
          title="Riyadh Tikets"
          class="inline-flex items-center"
        >
          <img
            src={"/images/RiyadhTiket logo.png"}
            width="140"
            height="160"
            alt="Riyadh tickets"
          />
        </Link>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/"
              aria-label="Riyadh Tickets Home"
              title="Home"
              class="font-medium tracking-wide text-purple1 transition-colors duration-200 hover:text-darkpurple"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              aria-label="All Events"
              title="All Events"
              class="font-medium tracking-wide text-purple1 transition-colors duration-200 hover:text-darkpurple"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-medium tracking-wide text-purple1 transition-colors duration-200 hover:text-darkpurple"
            >
              Contact Us
            </Link>
          </li>
          {user ? (
            <>
              <UserDropdown />
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/"
                  aria-label="Login"
                  title="Login"
                  class="font-medium tracking-wide text-purple1 transition-colors duration-200 hover:text-darkpurple"
                  onClick={() => dispatch(showLogin())}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md  bg-purple1 hover:bg-darkpurple focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                  onClick={() => dispatch(showSignup())}
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>

        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none text-gray focus:shadow-outline hover:bg-graylight focus:bg-graylight"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full ">
              <div class="p-5 bg-white border border-graylight rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="logo"
                      title="Riyadh Tickets"
                      class="inline-flex items-center"
                    >
                      <img
                        src={"/images/RiyadhTiket logo.png"}
                        width="140"
                        height="160"
                        alt="Riyadh tickets"
                      />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <Link
                        to="/"
                        aria-label="Home"
                        title="Home"
                        class="font-medium tracking-wide text-purple1 transition-colors duration-200  hover:text-darkpurple"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/events"
                        aria-label="events"
                        title="eventds"
                        class="font-medium tracking-wide text-purple1 transition-colors duration-200 hover:text-darkpurple"
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contactus"
                        aria-label="contactus"
                        title="contactus"
                        class="font-medium tracking-wide text-purple1 transition-colors duration-200 hover:text-darkpurple"
                      >
                        Contact Us
                      </Link>
                    </li>
                    {user ? (
                      <>
                        <UserDropdown />
                      </>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/"
                            aria-label="login"
                            title="About us"
                            class="font-medium tracking-wide  text-purple1 transition-colors duration-200 hover:text-darkpurple"
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md  bg-purple1 hover:bg-darkpurple focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </Link>
                        </li>
                      </>
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
}
