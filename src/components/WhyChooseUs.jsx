import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsCollection, BsWallet } from "react-icons/bs";
import {
  FaBalanceScaleLeft,
  FaChessKnight,
  FaSatelliteDish,
} from "react-icons/fa";
import whyChooseUsImg from "../assets/why-choose-us.png";
import ContentWrapper from "./ContentWrapper";

const WhyChooseUs = () => {
  const left = [
    {
      id: 1,
      title: "CONNECT YOUR WALLET",
      overview: "Use Trust Wallet, Metamask or to connect to the app.",
      url: <BsWallet className="text-white text-4xl" />,
    },
    {
      id: 2,
      title: "SELECT YOUR QUANTITY",
      overview: "Upload your crypto and set a title, description and price.",
      url: <BsCollection className="text-white text-4xl" />,
    },
    {
      id: 3,
      title: "CONFIRM TRANSACTION",
      overview: "Earn by selling your crypto on our marketplace.",
      url: <AiOutlineThunderbolt className="text-white text-4xl" />,
    },
  ];

  const right = [
    {
      id: 1,
      title: "RECEIVE YOUR OWN NFTS",
      overview: "Invest all your crypto at one place on one platform.",
      url: <FaSatelliteDish className="text-white text-4xl" />,
    },
    {
      id: 2,
      title: "TAKE A MARKET TO SELL",
      overview:
        "Discover, collect the right crypto collections to buy or sell.",
      url: <FaChessKnight className="text-white text-4xl" />,
    },
    {
      id: 3,
      title: "DRIVE YOUR COLLECTION",
      overview: "We make it easy to Discover, Invest and manage.",
      url: <FaBalanceScaleLeft className="text-white text-4xl" />,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[rgb(14,8,42)] to-[#000000]">
      <ContentWrapper>
        <p className="text-center py-16 text-white text-5xl sm:text-3xl md:text-4xl lg:text-6xl font-bold  ">
          WHY
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#310c96] to-[#C700EF]">
            CHOOSE US
          </span>
        </p>

        <div className="pb-16 grid grid-cols-1 lg:grid-cols-3 text-white ">
          {/* left */}
          <div className="grid grid-cols-1 gap-4">
            {left.map(({ id, title, overview, url }) => (
              <div
                key={id}
                className="flex flex-row lg:flex-col bg-[#1B1229] gap-4 py-10 px-5 rounded-2xl"
              >
                <div className="flex">
                  <div className="h-max p-4 bg-gradient-to-tr from-[#4200F9] to-[#D700ED] rounded-2xl">
                    {url}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h1 className="font-bold text-2xl">{title}</h1>
                  <p className="font-medium">{overview}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <img
              src={whyChooseUsImg}
              alt=""
              className="h-full lg:h-[40%] object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {right.map(({ id, title, overview, url }) => (
              <div
                key={id}
                className="flex flex-row lg:flex-col  bg-[#1B1229] gap-4 py-10 px-5 rounded-2xl"
              >
                <div className="flex">
                  <div className="h-max p-4 bg-gradient-to-tr from-[#4200F9] to-[#D700ED] rounded-2xl">
                    {url}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h1 className="font-bold text-2xl">{title}</h1>
                  <p className="font-medium">{overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default WhyChooseUs;
