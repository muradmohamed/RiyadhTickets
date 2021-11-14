import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../images/RiyadhTiket logo.png'


export default function Navbar() {
    return (
     <nav className='flex justify-between items-center h-19 bg-white text-pink-900 relative shadow-sm font-sans'>
         <Link to='/' className='pl-10 py-4 navbar-brand'>
         <img src={logo} width="140" height="160" alt ="Riyadh tickets"/>
         </Link>
         <div className='px-4 cursor-pointer md:hidden '>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
         </svg>
         </div>

         <div className='pr-8 md:block hidden'>
             <Link className='p-4' to='/'>
              Home
              </Link>   

               <Link className='p-4' to='/events'>
              Events
              </Link>   

                <Link className='p-4' to='/contactus'>
           Contact Us
              </Link>  

 <Link className='p-2' to='/login'><button class="w-30  h-8 px-3  rounded-full bg-pink-800 text-white  hover:bg-pink-50  hover:text-pink-800" type="submit">Sign Up</button>
        </Link> 

      <Link className='p-2' to='/signup'><button class="w-30  h-8 px-5 rounded-full bg-pink-50 text-pink-800 hover:bg-pink-800  hover:text-pink-50" type="button">Login</button>
</Link>         
         </div >


     </nav>
    )
}
