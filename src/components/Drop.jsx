import React from "react";
import ContentWrapper from "./ContentWrapper";

const Drop = () => {
  return (
    <div className="flex justify-center items-center w-full  bg-gradient-to-r from-[rgb(14,8,42)] to-[#000000]">
      <div className="rounded-2xl shadow-lg w-4/5 mx-auto max-w-[1224px] bg-[#0E0E0E] my-20 py-20 flex justify-center flex-col gap-8 items-center text-white lg:px-0 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Never miss a drop</h1>
        <p className="text-[#7D808C] text-center">
          Subscribe to our super-exclusive drop list and be the first to know
          about upcoming drops
        </p>
        <div className="flex flex-col sm:flex-row gap-8 w-full items-center justify-center">
          <input
            type="text"
            className="input w-4/5 sm:w-auto bg-[#1A2344] pr-[10%] lg:pr-[15%] pl-6 rounded-xl"
            placeholder="Enter your email address"
          />
          <button className="bg-[#1E50FF] rounded-2xl py-2 w-[30%] sm:w-[20%] lg:w-[10%] md:w-[13%] text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drop;
