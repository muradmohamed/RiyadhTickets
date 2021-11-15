import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function Events() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get("/events").then(res => {
            setEvents(res.data)
        })
    },[])
    return (
     
    <div className="flex flex-wrap pb-16 bg-white shadow overflow-hidden sm:rounded-lg">
  {events.map(event =>   <div className="w-full p-6 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
       <Link to={`/events/${event.id}`}><img className="rounded-lg" src={event.image} alt=""/></Link>
   </div>)}
  </div>
        
    )
}
