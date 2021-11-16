import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextStore } from "../context";


export default function MyTickets() {

  const { user } = useContext(ContextStore);



  if (!user) return <div>Loading</div>;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  text-purple1 uppercase rounded-full  bg-graylight">
            Tickets
          </p>
        </div>
        <h2 className="max-w-lg mb-6  font-sans text-3xl font-bold leading-none tracking-tight text-darkblue sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20  text-purpule2 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">All Your Ticketes</span>
          </span>
        </h2>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {user.tickets.map((ticket, index) => (
          <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
              <img
                src={ticket.event.image}
                className="  w-full h-full rounded-t"
                alt="Plan"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-purple1 border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold text-darkblue">
                  {" "}
                  Ticket Class: {ticket.class}
                </div>
                <p className="text-sm pb-2  text-darkblue">
                  {ticket.event.title}
                </p>
              </div>

              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=${++index}&qzone=1&margin=0&size=400x400&ecc=L`}
                className="object-cover w-full h-full  pb-2 rounded-t"
                alt="Plan"
              />
              <Link
                to={`/events/${ticket.event.id}`}
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white uppercase bold transition duration-200 rounded shadow-md  bg-orang1 hover:bg-orang2 hover:text-graylight  focus:shadow-outline focus:outline-none"
              >
                Go To Event
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
