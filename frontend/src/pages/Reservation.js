import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Reservation() {
  const navigate = useNavigate();
    const {id}= useParams();
    const[eventsDetails, setEventsDetails] = useState({});
    useEffect(() => { 
        axios.get(`/events/${id}`)
        .then((res)=>{
            console.log(res.data)
       setEventsDetails(res.data)
        })
 
     },[])

     const book =(key)=> {

        axios.post(`/events/${id}/book` , {class: key})
        .then((res)=>{
           Swal.fire({
               title: 'You Successfully Created Your Booking',
               text: 'Redirecting to ticket .....',
               icon: 'success',
               showCancelButton: false,
               showConfirmButton: false,
               timer: 1500,
               timerProgressBar: true,
               didClose: () => {
                navigate("/mytickets");
               }
           } 
           )
        })
     }
   if(!Object.keys(eventsDetails).length ) return <div>Loading</div>

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple1 uppercase rounded-full bg-teal-accent-400">
           BOOKING
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-darkblue sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-purpule2 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Ticket Class For The Event</span>
          </span> 
        </h2>
        <p className=' text-darkblue'>Select Your Ticket Class</p>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
      {Object.keys(eventsDetails.prices).map((key)=>
        <div className="p-5 cursor-pointer duration-300 transform bg-white
         border-2 border-dashed rounded shadow-sm  border-purple1
          hover:-translate-y-2"  onClick={()=> book(key) }>
          <div className="flex items-center mb-2 text-center">
            
            <p className="text-lg font-bold text-center text-darkblue ">{key}</p>
          </div>
          <p className="text-sm text-darkblue text-center font-bold">
          {eventsDetails.prices[key]} SAR
          </p>
        </div>
      )}    
      </div>
    </div>
    )
}

