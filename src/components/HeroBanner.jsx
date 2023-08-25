import React from "react";
import bannerTextOne from "../assets/banner-text-1.png";
import bannerTextTwo from "../assets/banner-text-2.avif";
import bannerCircleImg from "../assets/security-third-image.png";

import ContentWrapper from "./ContentWrapper";

const HeroBanner = () => {
  return (
    <header className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#07010B]  via-[#020005] to-[#1B0029]">
      {/* Discover Unique NFTs, Track Crypto Prices */}

      {/* Wrapper */}
      <ContentWrapper>
        {/* Hero Banner Content */}
        <div class="flex flex-col gap-4 text-white text-3xl md:text-4xl lg:text-8xl font-bold ">
          {/* Row 1 */}
          <div class="flex w-full gap-2 justify-center">
            <h1 class="w-max">Discover</h1>
            <img src={bannerTextOne} alt="" className="w-[12%] rounded-2xl " />
            <h1 class="w-max">Unique</h1>
          </div>

          {/* Row 2 */}
          <div class="flex gap-2 justify-center text-3xl md:text-4xl lg:text-7xl">
            <h1>NFTs, Track Crypto</h1>
            <img src={bannerTextTwo} alt="" className="w-[15%] rounded-2xl" />
          </div>
          {/* Row 3 */}
          <div className="flex justify-center items-center gap-16 w-4/5 mx-auto">
            <p class="text-[10px] leading-3 lg:text-sm md:w-2/5 font-light">
              The Ultimate Platform for NFT Enthusiasts. Explore a diverse
              collection of authentic digital creations, each backed by
              blockchain technology and creator-signed certificates
            </p>
            <h1 className="w-max">Prices</h1>
          </div>
        </div>

        {/* Crypto Wallet List */}

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 justify-items-center items-center w-full  mt-6 text-white ">
          {/* Metamask */}
          <div className="flex justify-center gap-2 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
              alt=""
              className="w-[20%]"
            />
            <p className="md:text-2xl lg:text-4xl font-bold">Metamask</p>
          </div>

          <div className="flex justify-center gap-2 items-center">
            <img
              src="https://asset.brandfetch.io/id9vYuaeii/idZNU6XKK9.png"
              alt=""
              className="w-[25%]"
            />
            <p className="md:text-2xl lg:text-4xl font-bold">BitGo</p>
          </div>

          <p className="md:text-2xl lg:text-4xl font-bold w-max">Coinbase</p>

          <div className="flex justify-center gap-2 items-center w-full">
            <img
              src="https://altcoinsbox.com/wp-content/uploads/2023/04/exodus-logo.png"
              alt=""
              className="w-[15%]"
            />
            <p className="md:text-2xl lg:text-4xl font-bold">EXODUS</p>
          </div>

          <div className="hidden lg:flex justify-center gap-2 items-center">
            <img
              src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg"
              alt=""
              className="w-[13%]"
            />
            <p className="md:text-2xl lg:text-2xl font-bold">Trust Wallet</p>
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default HeroBanner;
