import React from "react";
import bannerTextOne from "../assets/banner-text-1.png";
import bannerTextTwo from "../assets/banner-text-2.avif";
import bannerCircleImg from "../assets/security-third-image.png";

import ContentWrapper from "./ContentWrapper";

const HeroBanner = () => {
  return (
    <header
      id="home"
      className="pt-20 flex flex-col justify-center items-center w-full h-screen min-h-[500px] bg-gradient-to-br from-[#07010B]  via-[#020005] to-[#1B0029]"
    >
      {/* Discover Unique NFTs, Track Crypto Prices */}

      {/* Wrapper */}
      <ContentWrapper>
        {/* Hero Banner Content */}
        <div className="flex-col hidden gap-4 text-3xl font-bold text-white sm:flex md:text-4xl lg:text-8xl ">
          {/* Row 1 */}
          <div className="flex justify-center w-full gap-2">
            <h1 className="w-max">Discover</h1>
            <img
              src={bannerTextOne}
              alt=""
              className="w-[8%] lg:w-[12%] rounded-2xl "
            />
            <h1 className="w-max">Unique</h1>
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-2 text-3xl md:text-4xl lg:text-7xl">
            <h1>NFTs, Track Crypto</h1>
            <img src={bannerTextTwo} alt="" className="w-[15%] rounded-2xl" />
          </div>
          {/* Row 3 */}
          <div className="flex items-center justify-center w-4/5 gap-16 mx-auto">
            <p className="text-[10px] leading-3 lg:text-sm md:w-2/5 font-light">
              The Ultimate Platform for NFT Enthusiasts. Explore a diverse
              collection of authentic digital creations, each backed by
              blockchain technology and creator-signed certificates
            </p>
            <h1 className="w-max">Prices</h1>
          </div>
        </div>

        {/* Hero Banner Content Mobile */}
        <div className="flex flex-col gap-4 text-3xl font-bold text-white sm:hidden md:text-4xl lg:text-8xl ">
          {/* Row 1 */}
          <div className="flex justify-center w-full gap-2">
            <h1 className="text-5xl sm:text-7xl w-max">Discover</h1>
            <img
              src={bannerTextOne}
              alt=""
              className="w-[50px] h-[50px] rounded-2xl "
            />
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-2 text-3xl text-center md:text-4xl lg:text-7xl">
            <h1>Unique NFTs, Track Crypto Prices</h1>
          </div>
          {/* Row 3 */}
          <div className="flex items-center justify-center w-full gap-16 mx-auto">
            <p className="text-[10px] leading-3 lg:text-sm md:w-2/5 font-light text-center">
              The Ultimate Platform for NFT Enthusiasts. Explore a diverse
              collection of authentic digital creations, each backed by
              blockchain technology and creator-signed certificates
            </p>
          </div>
        </div>

        {/* Crypto Wallet List */}

        <div className="grid items-center w-full grid-cols-2 mt-6 text-white justify-items-start sm:grid-cols-2 md:grid-cols-4 ">
          {/* Metamask */}
          <div className="flex items-center gap-2 sm:justify-center md:justify-start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
              alt=""
              className="w-[20%]"
            />
            <p className="text-xl font-bold md:text-2xl lg:text-3xl">
              Metamask
            </p>
          </div>

          <div className="flex items-center gap-2 sm:justify-center md:justify-start">
            <img
              src="https://asset.brandfetch.io/id9vYuaeii/idZNU6XKK9.png"
              alt=""
              className="w-[25%]"
            />
            <p className="text-xl font-bold md:text-2xl lg:text-3xl">BitGo</p>
          </div>

          <div className="flex items-center w-full gap-2 sm:justify-center md:justify-start">
            <img
              src="https://altcoinsbox.com/wp-content/uploads/2023/04/exodus-logo.png"
              alt=""
              className="w-[15%]"
            />
            <p className="text-xl font-bold md:text-2xl lg:text-3xl">EXODUS</p>
          </div>

          <div className="flex items-center gap-2 sm:justify-center md:justify-start">
            <img
              src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg"
              alt=""
              className="w-[16%]"
            />
            <p className="text-xl font-bold md:text-2xl lg:text-3xl">
              Trust Wallet
            </p>
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default HeroBanner;
