import React from "react";

const Footer = () => {
  return (
    <footer className="py-20 bg-gradient-to-r from-[rgb(14,8,42)] to-[#000000] n p-10 bg-base-200 text-white">
      <div className="flex justify-between flex-col lg:flex-row w-4/5 mx-auto gap-8 lg:gap-0">
        <div className="w-full lg:w-2/5">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/nft-community-5613089-4669010.png?f=avif&w=256"
            alt=""
            className="w-[15%]"
          />
          <p className="text-[#9EA0AC] pt-4">
            The largest NFT marketplace. Authentic and truly unique digital
            creation. SIgned and issued by the creator, made possible by
            blockchain technology
          </p>
        </div>

        <div className=" flex flex-col gap-8 sm:gap-0 sm:flex-row justify-between w-full lg:w-2/4 text-left">
          <div className="text-[#9EA0AC] grid grid-cols-1 text-md sm:text-base text-sm">
            <span className="text-3xl sm:text-lg md:text-xl font-bold text-white">
              Marketplace
            </span>
            <a className="link link-hover">Explore</a>
            <a className="link link-hover">All NFT</a>
            <a className="link link-hover">Collectibles</a>
            <a className="link link-hover">Virtual Worlds</a>
          </div>

          <div className="text-[#9EA0AC] grid grid-cols-1 text-md sm:text-base text-sm">
            <span className="text-3xl sm:text-lg md:text-xl font-bold text-white">
              Resources
            </span>
            <a className="link link-hover">Help center</a>
            <a className="link link-hover">Partners</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Docs</a>
            <a className="link link-hover">Newsletter</a>
          </div>

          <div className="text-[#9EA0AC] grid grid-cols-1 text-md sm:text-base text-sm">
            <span className="text-3xl sm:text-lg md:text-xl font-bold text-white">
              Company
            </span>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
