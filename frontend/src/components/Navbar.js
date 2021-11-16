import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ContextStore } from "../context";
import { showLogin, showSignup } from "../reducers/assets";
import { createPopper } from "@popperjs/core";
import UserDropdown from './UserDropdown';

export default function Navbar() {
  const state = useSelector((state) => ({...state.assets}));
  const {user, setToken} = useContext(ContextStore);
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between items-center h-19 bg-white text-purple1 relative shadow-sm font-sans">
      <Link to="/" className="pl-10 py-4 navbar-brand">
        <img src={"/images/RiyadhTiket logo.png"} width="140" height="160" alt="Riyadh tickets" />
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

      <div className=" pr-24 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>

        <Link className="p-4" to="/events">
          Events
        </Link>

        <Link className="p-4" to="/contactus">
          Contact Us
        </Link>

      {user ? <>
    <UserDropdown/>
        
      </> : <>
      
      <Link className="p-2" to="/">
          <button
            className = "w-30  h-8 px-3 rounded-full bg-purple1 bg-opacity-20   hover:bg-pink-50 active:bg-pink-900 font-bold uppercase text-sm  rounded shadow hover:text-pink-800"
            type="submit"
            onClick={() => dispatch(showLogin())}
          >
            Login
          </button>
      
        </Link>

         <Link className='p-2' to='/'>
        <button className="w-30  h-8 px-5 rounded-full bg-purple1  text-white font-bold uppercase hover:bg-pink-800  hover:text-pink-50"
         onClick={() => dispatch(showSignup())} type="button">SIGN UP</button>
        </Link> 
      
      </>}
        
      </div>
    </nav>
  );
}
