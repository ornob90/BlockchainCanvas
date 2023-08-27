import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { RiNftFill } from "react-icons/ri";
import ContentWrapper from "./ContentWrapper";

const Topcreator = () => {
  const creators = [
    {
      id: 1,
      src: "http://www.grace-dev.com/wp-content/uploads/2022/03/avatar-805x1024.jpeg",
      name: "TorikHandoko",
      assets: "14,821.89",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2014/08/25/09/26/monster-426996_640.jpg",
      name: "DayatS4ns_",
      assets: "24,016.32",
    },
    {
      id: 3,
      src: "https://i.insider.com/63b5bf391c74800018067dcb?width=600&format=jpeg&auto=webp",
      name: "Kuproy_bmbl",
      assets: "9,124.59",
    },
    {
      id: 4,
      src: "https://m.media-amazon.com/images/I/71KwNZYeQaL._AC_SX569_.jpg",
      name: "#arphonexx",
      assets: "6,443.71",
    },
    {
      id: 5,
      src: "https://banner2.cleanpng.com/20190706/rtz/kisspng-smiley-thumb-signal-emoticon-clip-art-vector-graph-5d20da638a9922.9936452415624341475677.jpg",
      name: "Glukon_",
      assets: "5,783.11",
    },
    {
      id: 6,
      src: "https://f4.bcbits.com/img/a0740876756_16.jpg",
      name: "Provocate69",
      assets: "5,981.23",
    },
    {
      id: 7,
      src: "https://f4.bcbits.com/img/a3480567986_16.jpg",
      name: "Boredfluctrus",
      assets: "8,333.20",
    },
    {
      id: 8,
      src: "https://naingswann.com/wp-content/uploads/2021/12/BW1-1024x819.jpg",
      name: "xxxrocearoxxx",
      assets: "8,333.20",
    },
    {
      id: 9,
      src: "https://s3.amazonaws.com/www-inside-design/uploads/2020/05/05-20-color-theory-post-v1-lgonzalez-1-810x810.jpg",
      name: "Yupi",
      assets: "2,192.56",
    },
  ];

  return (
    <div
      id="creator"
      className="bg-gradient-to-r from-[rgb(14,8,42)] to-[#000000]"
    >
      <ContentWrapper>
        <p className="text-[#ad2ef2] text-center font-bold text-sm">
          NFT Creator
        </p>

        <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white lg:text-4xl">
          <h1 className="">Top Creator This Week</h1>
        </div>

        {/* Creators List */}
        <div className="grid grid-cols-1 gap-4 py-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Creator */}

          {creators.map(({ id, src, name, assets }) => (
            <div
              key={id}
              className="flex justify-between rounded-2xl px-6 py-4 items-center text-white bg-[#111115]"
            >
              <div className="w-[22%] h-full rounded-full">
                <img
                  src={src}
                  alt=""
                  className="object-fill w-full h-full rounded-2xl"
                />
              </div>
              <div className="w-2/4">
                <p className="pb-2 text-xl font-bold">{name}</p>
                <div className="flex items-center gap-2">
                  <RiNftFill className="text-[rgb(103,132,237)] text-xl" />
                  <p className="text-[#909090]">{assets}</p>
                </div>
              </div>
              <BsThreeDots className="text-xl text-white" />
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Topcreator;
