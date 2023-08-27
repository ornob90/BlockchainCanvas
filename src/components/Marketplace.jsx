import React, { useContext, useEffect, useState } from "react";
import { BsFire, BsThreeDots } from "react-icons/bs";
import { RiNftFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import crystelImg from "../assets/crystel.png";
import NftContext from "../context/NftContext";
import trendingData from "../data/trending-data";
import useFetch from "../hooks/useFetch";
import ContentWrapper from "./ContentWrapper";

const Marketplace = () => {
  const navigate = useNavigate();

  return (
    <div className="py-10 bg-gradient-to-br from-[#0B021A] to-[#090D2A] text-white">
      <ContentWrapper>
        <p className="text-[#ad2ef2] text-center font-bold text-sm">
          Crypto Marketplace
        </p>

        <div className="flex items-center justify-center gap-2 text-2xl font-bold lg:text-4xl">
          <h1 className="">Trending</h1>
          <BsFire className="text-[#f8be37]" />
        </div>

        {/* NFT Cards */}
        <div className="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Card */}
          {/* //id // name // price_btc // large */}

          {trendingData.coins.slice(0, 12).map(({ item }) => (
            <div
              onClick={() => navigate(`coins/${item.id}`)}
              key={item.id}
              className="p-4 bg-[#100E11] rounded-xl hover:scale-[103%] duration-[.3s] hover:border-[#2050FF] shadow-lg flex flex-col justify-center items-center"
            >
              <img src={item.large} alt="" className="rounded-lg " />

              <div className="flex items-center justify-between w-full mt-4">
                <div className="">
                  <p className="font-bold text-2xl sm:text-xl">{item.name}</p>

                  <h3 className="text-[#1D42CC] font-bold text-md sm:text-sm mt-2">
                    {item.price_btc} BTC
                  </h3>
                </div>

                <div className="flex flex-col items-end justify-between gap-6 text-2xl">
                  <p>
                    <BsThreeDots />
                  </p>
                  <p>
                    <RiNftFill className="text-[#5F7FEC]" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Marketplace;
