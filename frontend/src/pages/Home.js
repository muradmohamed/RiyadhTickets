import React, { createRef } from "react";
import Events from './Events';
export default function Home() {
  const event = createRef(null);
  return (
    <>
   <div className="relative bg-white overflow-hidden mt-14 mb-20 ">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-3xl font font-extrabold text-darkblue tracking-tight  sm:text-5xl">
            The Easiest Way to Find and Book Events
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://s3.ticketmx.com/uploads/images/0a324ef20fca640123d5783fabedc3543bb54a48.jpeg?w=750&h=750&mode=crop&bgcolor=black&format=jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://s3.ticketmx.com/uploads/images/48324b6606ac6215c81346e86d981049900530d3.jpeg?w=750&h=750&mode=crop&bgcolor=black&format=jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://s3.ticketmx.com/uploads/images/e9b81688fc1b76925c67f578f38e8aee7a10db20.png?w=750&h=750&mode=crop&bgcolor=black&format=jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://s3.ticketmx.com/uploads/images/661df34a7041a05242d9eb7126dd6d89972c4404.png?w=750&h=750&mode=crop&bgcolor=black&format=jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://s3.ticketmx.com/uploads/images/2489ac04e5f9532e6f4f7101d24704b8cb1579c4.png?w=750&h=750&mode=crop&bgcolor=black&format=jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://s3.ticketmx.com/uploads/images/656f06fce3772b3a66f48576a4951863c4111328.jpeg?w=750&h=750&mode=crop&bgcolor=black&format=jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://s3.ticketmx.com/uploads/images/b91a577dd41a29fafb6aef5b6ce68c8611923976.png?w=750&h=750&mode=crop&bgcolor=black&format=jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
              className="inline-block text-center  bg-orang1 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
               onClick={()=> event.current.scrollIntoView({
                 behavior:'smooth',
                block:'start',
                inline:'nearest'
                })}
              >
             Go To Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref= {event}><Events/> </div>

  
    {/* <div className="flex justify-between items-center mb-52">
      <div className="pl-20 w-2/5 items-center text-center"> */}
        {/* <h1 className="text-3xl  mb-10 text-purpule2 font-bold">
          The Easiest Way to Find and Book Events
          {/* <span className=" text-purple1 font-bold"></span> */}
        {/* </h1> */}
        {/* <p></p> */}

        {/* <button
          className=" px-2 py-2 px-3  rounded-full bg-orang1 text-white hover:bg-pink-50 active:bg-pink~-900 font-bold uppercase text-sm  rounded shadow hover:text-pink-800"
          type="submit"
        >
          go to events
        </button>
      </div>
      <div className="w-3/5"> */}
       
        {/* <img
          src={"/images/header2.png"}
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
          alt="header background"
        /> */}
      {/* </div>
    </div> */}

</>)}
  