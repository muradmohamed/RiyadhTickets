import axios from 'axios';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Button from "@material-tailwind/react/Button";


export default function EventDetails() {
    const {id}= useParams();
    const[eventsDetails, setEventsDetails] = useState({});

    useEffect(() => { 
       axios.get(`/events/${id}`)
       .then((res)=>{
           console.log(res.data)
      setEventsDetails(res.data)
       })

    },[])

    return (
    <div>
   <div className=' p-10  mb-18 '>
       {/* {JSON.stringify(eventsDetails)} */}
       <img className=' rounded-xl' src= "https://s3.ticketmx.com/uploads/images/24cc2f18d6eefe8b8d2c2702861e80bf5f532306.jpg?w=1920&h=700&mode=crop&bgcolor=black&format=jpg" alt=""/>
       {/* <img className=' rounded-xl' src= {eventsDetails.header_image} alt=""/> */}
   </div>
   {/* details */}

  
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple1 uppercase rounded-full bg-teal-accent-400">
           Event Details
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-darkblue sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20   text-purpule2 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">CIRQUE DU SOLEIL - MESSI 10</span>
            {/* <span className="relative">{eventsDetails.title}</span> */}
          </span>
         
        </h2>
        <p className="text-base  text-darkblue md:text-lg">
        {/* {eventsDetails.description} */}
        Famous for its spectacular performances, the International Circus (Cirque du Soleil) 
        presents the Messi 10 show, which narrates his life story from childhood until he became one of the greatest football players in the world. It is the first show of Cirque du Soleil to present the true story in the form of a fictional circus show. You will spend 
        an hour and a half in an atmosphere full of fun and excitement.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-purple1 "
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>


            <div>
              <h6 className="mb-2 font-semibold text-darkblue leading-5">
                Date
              </h6>
              <p className="text-sm text-darkblue">
              Wednesday, 10 November 2021 - Friday, 10 December 2021
               {/* {eventsDetails.start_date} */}

              </p>
              <hr className="w-full my-6 border-darkblue" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-purple1"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5 text-darkblue">
              Venue
              </h6>
              <p className="text-sm text-darkblue">
              Blvd , Arena
              {/* {eventsDetails.venue} */}
              </p>
              <hr className="w-full my-6 border-darkblue" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-purple1"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5 text-darkblue">
              Price including VAT

              </h6>
              <p className="text-sm text-darkblue">
                  From 100 SAR
              {/* From {eventsDetails.prices.A} SAR */}
              </p>
              <hr className="w-full my-6 border-darkblue" />

            </div>
          </div>
    
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-purple1"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>


            <div>
              <h6 className="mb-2 font-semibold leading-5 text-darkblue">
              Terms & Conditions
              </h6>
              <p className="text-sm text-darkblue">
              <ul className='list-disc md:list-disc'>
                  <li>To enter this event, you should be “vaccinated” in Tawakkalna application. </li>
                  <li>Tickets are non-cancellable, refundable, or switched.</li>
                  <li>All tickets are VAT included.</li>
                  <li>It illegal to resale the tickets. </li>
                  <li>The ticket holder is solely responsible for checking the date, time, location, and the age restriction of the event. Two hours early arrival is recommended, and the organizer shall have the right to refuse any late entries and the ticket holder shall not have the right to claim for
                 the reimbursement of the ticket price or any compensation whatsoever.</li>
                  <li>All tickets holders and their belongings may be subject to search when entering the venue. Prohibited and dangerous items will be confiscated. Any item which the organizer or venue security personnel consider as security 
                      risk or that may be used to damage the venue or interfere with the event will be confiscated.</li>
                  <li>Kids under 12 should be with an adult.</li>
                  <li>All cameras are not allowed. 
                      In case if using your phone camera, flash is not allowed.</li>
                  <li>The ticket holder consents to the photographs, 
                      video clips and audio clips that may be posted on the internet.</li>
                  <li>The organizer shall not be liable for any injuries, illness, death of any visitor, 
                      loss or damage to collectibles due to causes arising from the event.</li>
                  <li>The organizer has the right to expel whoever commits a violation.</li>
                  <li>The ticket holder must adhere to the seat number.</li>
                  <li>In purchasing this ticket, you agree to abide by all the terms and conditions and adhere to any other responsible terms and conditions or restrictions provided by the organizer before or during the event.
</li>


              </ul>
               {/* {eventsDetails.start_date} */}

              </p>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-2 gap-5 md:my-auto">

          <div className="object-cover w-full h-56 col-span-2  rounded shadow-lg mb-64">
            
            <table className="min-w-full divide-y  divide-gray-50 rounded shadow-lg ">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  text-gray uppercase tracking-wider"
                  >
                    Ticket Class
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider"
                  >
                    Price Including VAT
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-50">
                  <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 text-darkblue">
                          A
                        </div>
                     
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-darkblue">955 SAR</div>
                   
                    </td>
                  </tr>
                  <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 text-darkblue">
                          B
                        </div>
                     
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-darkblue">575 SAR</div>
                   
                    </td>
                  </tr>
              
                  <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 text-darkblue">
                        C
                        </div>
                     
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-darkblue"> 345 SAR</div>
                   
                    </td>
                  </tr>

                  <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 text-darkblue">
                         VIP
                        </div>
                     
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-darkblue"> 1,610 SAR</div>
                   
                    </td>
                  </tr>

                  <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 text-darkblue">
                        VVIP
                        </div>
                     
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-darkblue"> 2,070 SAR</div>
                   
                    </td>
                  </tr>

                  <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 text-darkblue">
                        Handicap
                        </div>
                     
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-darkblue"> 300 SAR</div>
                   
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://s3.ticketmx.com/uploads/images/8713650c9e24c8e052d657379da8f706255afaea.jpg?w=200"
            // src={eventsDetails.orignizer_image}
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
           


        </div>
        
      </div>
      <div className='grid grid-cols-1  pt-24 items-center '>
    <button className="inline-block text-center  bg-orang1 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
             
             Book Now
              </button>
 </div>
    </div>
   

   {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {eventsDetails.name}
              <br className="hidden md:block" />
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            {eventsDetails.description}
            </p>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase">
            Details:
          </p>
          <div className=" space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-5">
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Date : {eventsDetails.start_date}  |  {eventsDetails.end_date}
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Venue : {eventsDetails.venue}
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Price including VAT: From {eventsDetails.prices.A} SAR
              </li>
            </ul>
           
          </div>
        </div>
        <div>
          <img
            className="object-cover w-50 h-56 rounded shadow-lg sm:h-96"
            src={eventsDetails.orignizer_image}
            alt=""
          />
        </div>
      </div>
    </div> */}

        </div>
    )
}
