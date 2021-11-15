import React from "react";

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <div className="pl-20 w-2/5 items-center text-center">
        <h1 className="text-3xl  mb-10 text-purpule2 font-bold">
          The Easiest Way to Find and Book Events
          {/* <span className=" text-purple1 font-bold"></span> */}
        </h1>
        <p></p>

        <button
          className=" px-2 py-2 px-3  rounded-full bg-orang1 text-white hover:bg-pink-50 active:bg-pink-900 font-bold uppercase text-sm  rounded shadow hover:text-pink-800"
          type="submit"
        >
          go to events
        </button>
      </div>
      <div className="w-3/5">
        {" "}
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
  );
}
