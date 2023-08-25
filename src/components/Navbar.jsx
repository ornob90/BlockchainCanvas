import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaSearchDollar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ContentWrapper from "./ContentWrapper";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex gap-6 justify-between bg-transparent fixed top-0 left-[5%] w-[90%] pt-4 items-center">
      {/* Title Content */}
      <div className="w-[60%] md:w-[40%] lg:w-[25%] flex justify-start gap-4 items-center">
        {/* Logo */}
        <img
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/nft-community-5613089-4669010.png?f=avif&w=256"
          alt=""
          className="w-[13%]"
        />
        <p className="text-white font-bold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#eadcf1] to-[#931bb8] w-max">
          BlockchainCanvas
        </p>
      </div>

      {/* nav buttons */}
      <ul className="w-[25%] gap-4 hidden lg:flex justify-between items-center text-gray-400 text-sm mr-2">
        <li>Drops</li>
        <li>Marketplace</li>
        <li>Creator</li>
        <li>Community</li>
      </ul>

      <div className="w-[40%] lg:w-[20%] relative hidden md:block">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full h-full py-2 max-w-xs bg-transparent border-gray-500 rounded-full text-white"
        />
        <FaSearchDollar className="absolute top-[25%] right-[8%] text-gray-400 text-xl" />
      </div>

      <button className="w-[35%] sm:w-[25%] md:w-[18%] lg:w-[14%] bg-[#2150FF] text-white border-none rounded-full hover:shadow-[0px_0px_8px_rgba(255,255,255,0.1)] hover:bg-[#2150FF] hover:scale-105 text-sm py-2">
        Connect Wallet
      </button>

      <CiMenuFries
        className="lg:hidden text-white text-2xl"
        onClick={() => setMenu(!menu)}
      />
      {/* Mobile Menu */}

      <div
        className={
          menu
            ? "fixed top-0 right-0 w-full sm:w-[40%] md:w-[25%] bg-gradient-to-br from-[#07010B]   to-[#020005] duration-[.5s] transition-all"
            : "absolute top-0 right-[-100%] transition-all duration-[.8s]"
        }
      >
        {menu && (
          <>
            <IoMdClose
              className="relative top-[20px] left-[85%] text-white text-2xl"
              onClick={() => setMenu(!menu)}
            />

            <ul className="h-screen  text-white flex flex-col justify-evenly items-center text-xl">
              <li class="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-full h-full py-2 max-w-xs bg-transparent border-gray-500 rounded-full text-white"
                />
                <FaSearchDollar className="absolute top-[25%] right-[8%] text-gray-400 text-xl" />
              </li>

              <li>Drops</li>
              <li>Marketplace</li>
              <li>Creator</li>
              <li>Community</li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
