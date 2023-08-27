import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaSearchDollar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import ContentWrapper from "./ContentWrapper";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#07010A] to-black w-full fixed top-0 py-4 left-0">
      <div className="flex items-center justify-between gap-6 drop-shadow-lg mx-auto w-[90%]">
        {/* Title Content */}

        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-74}
          duration={1000}
          className="w-[60%] md:w-[40%] lg:w-[20%]"
        >
          <div className="flex items-center justify-start gap-4 ">
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
        </Link>

        {/* nav buttons */}
        <ul className="w-[30%] gap-4 hidden xl:flex justify-between items-center text-gray-400 text-sm mr-2">
          <li className="cursor-pointer">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-74}
              duration={1000}
            >
              Home
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link
              to="market"
              spy={true}
              smooth={true}
              offset={-74}
              duration={1000}
            >
              Market
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="trending"
              spy={true}
              smooth={true}
              offset={-74}
              duration={1000}
            >
              Trending
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="nft"
              spy={true}
              smooth={true}
              offset={-74}
              duration={1000}
            >
              NFT
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="creator"
              spy={true}
              smooth={true}
              offset={-74}
              duration={1000}
            >
              Creator
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-74}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="w-[40%] lg:w-[45%] xl:w-[25%] md:flex justify-center items-center relative hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full max-w-xs py-2 text-white bg-transparent border-gray-500 rounded-full input input-bordered"
          />
          <FaSearchDollar className="absolute top-[25%] right-[20%] xl:right-[10%] text-gray-400 text-xl" />
        </div>

        <button className="hidden sm:block sm:w-[25%] md:w-[18%] lg:w-[14%] bg-[#2150FF] text-white border-none rounded-full hover:shadow-[0px_0px_8px_rgba(255,255,255,0.1)] hover:bg-[#2150FF] hover:scale-105 text-sm py-2 duration-[.3s]">
          Connect Wallet
        </button>

        <CiMenuFries
          className="text-2xl text-white lg:hidden"
          onClick={() => setMenu(!menu)}
        />
        {/* Mobile Menu */}

        <div
          className={
            menu
              ? "fixed top-[-32%] right-[-6%] w-[100vw]    md:w-[50%] bg-gradient-to-br from-[#07010B]   to-[#020005] duration-[.5s] transition-all h-screen"
              : "absolute top-0 right-[-100%] transition-all duration-[.8s]"
          }
        >
          {menu && (
            <>
              <div className="flex justify-between  w-[90%] mt-4 mx-auto">
                <button className="relative w-[35%] sm:hidden bg-[#2150FF] text-white border-none rounded-full hover:shadow-[0px_0px_8px_rgba(255,255,255,0.1)] hover:bg-[#2150FF] hover:scale-105 text-sm py-2 duration-[.3s]">
                  Connect Wallet
                </button>

                <IoMdClose
                  className="relative text-2xl text-white"
                  onClick={() => setMenu(!menu)}
                />
              </div>

              <ul className="flex flex-col items-center w-full h-screen gap-8 text-white text-md">
                <li class="relative mt-8 flex justify-center items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-[80dvw] h-full max-w-xs py-2  mx-auto text-white bg-transparent border-gray-500 rounded-full input input-bordered"
                  />
                  <FaSearchDollar className="absolute top-[25%] right-[16%] text-gray-400 text-xl" />
                </li>

                <li className="cursor-pointer">
                  <Link
                    onClick={() => setMenu(!menu)}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-74}
                    duration={1000}
                  >
                    Home
                  </Link>
                </li>

                <li className="cursor-pointer">
                  <Link
                    onClick={() => setMenu(!menu)}
                    to="market"
                    spy={true}
                    smooth={true}
                    offset={-74}
                    duration={1000}
                  >
                    Market
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    onClick={() => setMenu(!menu)}
                    to="trending"
                    spy={true}
                    smooth={true}
                    offset={-74}
                    duration={1000}
                  >
                    Trending
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    onClick={() => setMenu(!menu)}
                    to="nft"
                    spy={true}
                    smooth={true}
                    offset={-74}
                    duration={1000}
                  >
                    NFT
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    onClick={() => setMenu(!menu)}
                    to="creator"
                    spy={true}
                    smooth={true}
                    offset={-74}
                    duration={1000}
                  >
                    Creator
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    onClick={() => setMenu(!menu)}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-74}
                    duration={1000}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
