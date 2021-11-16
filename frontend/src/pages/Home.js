import React, { createRef } from "react";
import Events from "./Events";

export default function Home() {
  const event = createRef(null);
  return (
    <>
      <div className="flex justify-between items-center mb-52">
        <div className="pl-20 w-2/5 items-center text-center">
          <h1 className="text-3xl  mb-10  text-darkblue  font-extrabold">
            The Easiest Way to Find and Book Events
            <span className=" text-purple1 font-bold"></span>
          </h1>
          <p></p>
          <button
            className=" px-2 py-2 px-3  rounded-full bg-orang1 text-white hover:bg-orang2  active:bg-orang2  font-bold uppercase text-sm shadow hover:text-graylight"
            type="submit"
            onClick={() =>
              event.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              })
            }
          >
            go to events
          </button>
        </div>
        <div className="w-3/5">
          <img
            src={"/images/header2.png"}
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
            alt="header background"
          />
        </div>
      </div>
      <div ref={event}>
        <Events />
      </div>
    </>
  );
}
