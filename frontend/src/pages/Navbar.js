import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/RiyadhTiket logo.png";
import { showLogin, showSignup } from "../reducers/assets";
import Login from "./Login";

export default function Navbar() {
  const state = useSelector((state) => ({...state.assets}));

  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between items-center h-19 bg-white text-purple1 relative shadow-sm font-sans">
      <Link to="/" className="pl-10 py-4 navbar-brand">
        <img src={logo} width="140" height="160" alt="Riyadh tickets" />
      </Link>
      <div className="px-4 cursor-pointer md:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>

        <Link className="p-4" to="/events">
          Events
        </Link>

        <Link className="p-4" to="/contactus">
          Contact Us
        </Link>

        <Link className="p-2" to="/">
          <button
            class="w-30  h-8 px-3  rounded-full bg-purple1 text-white  hover:bg-pink-50 active:bg-pink-900 font-bold uppercase text-sm  rounded shadow hover:text-pink-800"
            type="submit"
            onClick={() => dispatch(showLogin())}
          >
            Login
          </button>
      
        </Link>

         <Link className='p-2' to='/signup'>
        <button class="w-30  h-8 px-5 rounded-full bg-purple1 bg-opacity-20  text-purple1 font-bold uppercase hover:bg-pink-800  hover:text-pink-50"
         onClick={() => dispatch(showSignup())} type="button">SIGN UP</button>
        </Link>         
      </div>
    </nav>
  );
}
