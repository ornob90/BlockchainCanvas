import React from "react";

const JoinUs = () => {
  return (
    <div className="bg-[#0F051D]  w-full text-white pb-10 py-20">
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          JOIN US VIA
        </h1>
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#310c96] to-[#C700EF]">
          DISCORD
        </p>

        <p className="font-medium text-md md:text-xl pb-4">
          Create or Invest all your assets at one place
        </p>

        <button className="text-md md:py-4 py-3 px-6 md:px-7 rounded-full bg-[#1E50FF]">
          Join Discord
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
