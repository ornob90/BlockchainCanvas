import React from "react";
import { BsFire, BsThreeDots } from "react-icons/bs";
import { RiNftFill } from "react-icons/ri";
import crystelImg from "../assets/crystel.png";
import ContentWrapper from "./ContentWrapper";

const Marketplace = () => {
  return (
    <div className="py-10 bg-gradient-to-br from-[#0B021A] to-[#090D2A] text-white">
      <ContentWrapper>
        <p className="text-[#ad2ef2] text-center font-bold text-sm">
          NFT Marketplace
        </p>

        <div className="flex items-center justify-center gap-2 text-2xl font-bold lg:text-4xl">
          <h1 className="">Hot Drops</h1>
          <BsFire className="text-[#f8be37]" />
        </div>

        {/* NFT Cards */}
        <div className="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Card */}

          <div className="p-4 bg-[#100E11] rounded-xl hover:scale-[103%] duration-[.3s] hover:border-[#2050FF] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1643888193686-81c45c445b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
              alt=""
              className="rounded-lg"
            />

            <div className="flex items-center justify-between w-full mt-4">
              <div className="">
                <p className="font-bold">Inception</p>
                <p>@earpon69</p>
                <h3 className="text-[#1D42CC] font-bold text-xl mt-2">
                  0.8 ETH
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
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Marketplace;
