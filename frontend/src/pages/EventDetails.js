import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();
  const [eventsDetails, setEventsDetails] = useState({});

  useEffect(() => {
    axios.get(`/events/${id}`).then((res) => {
      console.log(res.data);
      setEventsDetails(res.data);
    });
  }, []);

  if (!Object.keys(eventsDetails).length) return <div>Loading</div>;
  return (
    <div>
      <div className=" p-10  mb-18 ">
        <img className=" rounded-xl" src={eventsDetails.header_image} alt="" />
      </div>

      {/* details */}

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple1 uppercase rounded-full bg-graylight">
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
              <span className="relative"
              dangerouslySetInnerHTML={{ __html: eventsDetails.title }}
                />
            </span>
          </h2>
          <p
            className="text-base  text-darkblue md:text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: eventsDetails.description }}
          />
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-center">
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-graylight">
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
                <h6 className="mb-2  text-darkblue leading-5 font-extrabold">
                  Date
                </h6>
                <p className="text-sm text-darkblue">
                  {eventsDetails.start_date}
                </p>
                <hr className="w-full my-6 border-darkblue" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-graylight">
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
                <h6 className="mb-2 leading-5 text-darkblue font-extrabold">
                  Venue
                </h6>
                <p className="text-sm text-darkblue">{eventsDetails.venue}</p>
                <hr className="w-full my-6 border-darkblue" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-graylight">
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
                <h6 className="mb-2 leading-5 text-darkblue font-extrabold">
                  Price including VAT
                </h6>
                <p className="text-sm text-darkblue">From 100 SAR</p>
                <hr className="w-full my-6 border-darkblue" />
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-graylight">
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
                <h6 className="mb-2  leading-5 text-darkblue font-extrabold">
                  Terms & Conditions
                </h6>
                <p className="text-sm text-darkblue">
                  <ul className="list-disc md:list-disc  text-justify ">
                    <div
                      className="text-left"
                      dangerouslySetInnerHTML={{ __html: eventsDetails.terms }}
                    ></div>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 md:my-auto">
            <div className="object-cover w-full col-span-2  rounded shadow-lg">
              <table className="min-w-full divide-y  divide-gray-50 rounded shadow-lg ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-extrabold  text-gray uppercase tracking-wider"
                    >
                      Ticket Class
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs  text-gray uppercase tracking-wider font-extrabold"
                    >
                      Price Including VAT
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-50 ">
                  {Object.keys(eventsDetails.prices).map((key) => (
                    <tr>
                      <td className="px-10 py-4 whitespace-nowrap  font-bold">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10  w-auto text-darkblue">
                            {key}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-bold">
                        <div className="text-sm text-darkblue">
                          {eventsDetails.prices[key]} SAR
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src={eventsDetails.orignizer_image}
              alt=""
            />
            <iframe
              className="object-cover w-full h-48 rounded shadow-lg"
              src={eventsDetails.location_iframe}
              aria-hidden="true"
              frameborder="0"
              tabindex="-1"
              title="event location"
            />
          </div>
        </div>
        <div className="grid grid-cols-1  pt-24 items-center ">
          <Link
            className="inline-block text-center  bg-orang1 border border-transparent rounded-md py-3 px-8  text-white font-bold uppercase hover:bg-orang2"
            to={`/events/${id}/booking`}
          >
            {" "}
            Book Now{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
