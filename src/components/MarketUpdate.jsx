import React from "react";
import ContentWrapper from "./ContentWrapper";

const MarketUpdate = () => {
  return (
    <div className="bg-[#0F051D]  w-full text-white pb-10">
      <ContentWrapper>
        {/* Content */}
        <div className="pt-10 w-full flex flex-col justify-center items-center">
          <p className="text-[#ad2ef2] text-center font-bold ">Track Crypto</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Market Updates
          </h1>
        </div>

        {/* Crypto Price Table */}

        <div className="px-4 rounded-t-lg text-sm sm:text-md  md:text-xl lg:text-3xl bg-gradient-to-r from-[#3D00FA] to-[#D400ED] font-bold w-full flex justify-between items-center py-3 mt-10">
          <p className="w-[11%]">Coin</p>
          <p className="w-[20%] text-center">Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>

        <div className="px-4 rounded-t-lg text-sm sm:text-md md:text-xl lg:text-3xl border-b-[1px] w-full flex justify-between items-center py-3 mt-2">
          <div className="flex gap-2 w-[10%]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkwMIGYl9uv9YnMYvqaBS0M-a8nyBaEb0CQ&usqp=CAU"
              alt=""
              className="w-[30%] rounded-full "
            />
            <p className="w-max ">Bitcoin</p>
          </div>
          <p>24,000$</p>
          <p>-1.2%</p>
          <p>152345620</p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default MarketUpdate;
