import React from "react";
import hammerPng from "../assets/Nft-Creation/hammer.png";
import mediaPng from "../assets/Nft-Creation/media.png";
import penImg from "../assets/Nft-Creation/pen.png";
import ContentWrapper from "./ContentWrapper";

const CreateSell = () => {
  const cardsContent = [
    {
      id: 1,
      src: penImg,
      name: "Create Artwork",
      overview:
        "Create your collection. Add social links, profile & banner images, and set a secondary sales fee.",
    },
    {
      id: 2,
      src: mediaPng,
      name: "Upload",
      overview:
        "Upload your work, customize your NFTs with properties, stats, and unlocks content",
    },
    {
      id: 3,
      src: hammerPng,
      name: "Listing",
      overview:
        "Set up and choose between auctions, fixed-price listing, and declining-price listing",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[rgb(14,8,42)] to-[#000000]">
      <ContentWrapper>
        <p className="text-[#ad2ef2] text-center font-bold text-sm">
          How to be a creator
        </p>

        <div className="text-white flex items-center justify-center gap-2 text-2xl font-bold lg:text-4xl">
          <h1 className="">Create and sell your NFTs</h1>
        </div>

        {/* Card List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 py-16 gap-8">
          {/* Card */}

          {cardsContent.map(({ id, src, name, overview }) => (
            <div
              key={id}
              className="flex flex-col gap-6 bg-[#0F0F11] rounded-3xl p-5 items-center text-center"
            >
              <div className="flex justify-center pt-10">
                <img src={src} alt="" className="w-2/5" />
              </div>

              <p className="text-white text-2xl font-bold ">{name}</p>
              <p className="text-[#878787] text-sm">{overview}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8 pb-16">
          <button className="rounded-full btn bg-[#1E50FF] border-none text-white">
            Create Now
          </button>
          <button className="rounded-full btn bg-transparent border-white border-1 text-white">
            Watch Video
          </button>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default CreateSell;
