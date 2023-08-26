import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CryptoContext from "../context/cryptoContext";
import marketData from "../data/market-data";
import useFetch from "../hooks/useFetch";
import ContentWrapper from "./ContentWrapper";

const MarketUpdate = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(7);

  // const coinsList = useContext(CryptoContext);
  const params = {
    vs_currency: "usd",
  };
  const { loading, data: coinsList } = useFetch("/coins/markets", params);

  const updateData = () => {
    setData(coinsList?.data?.slice(pageStart, pageEnd));
  };

  useEffect(() => {
    updateData();
  }, [coinsList]);

  useEffect(() => {
    updateData();
  }, [pageStart, pageEnd]);

  useEffect(() => {
    setPageStart((page - 1) * 8);
    setPageEnd(8 * page);
  }, [page]);

  const navigate = useNavigate();

  return (
    <div className="bg-[#0F051D]  w-full text-white pb-10">
      <ContentWrapper>
        {/* Content */}
        <div className="flex flex-col items-center justify-center w-full pt-10">
          <p className="text-[#ad2ef2] text-center font-bold ">Track Crypto</p>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Market Updates
          </h1>
        </div>

        {/* Crypto Price Table */}
        <div className="px-4 rounded-t-lg text-sm sm:text-md  md:text-xl lg:text-3xl bg-gradient-to-r from-[#3D00FA] to-[#D400ED] font-bold w-full flex justify-between items-center py-3 mt-10">
          <p className="w-[11%]">Coin</p>
          <p className="w-[25%] md:w-[20%] text-center">Price</p>
          <p>24h Change</p>
          <p className="hidden md:block">Market Cap</p>
        </div>

        {data?.map(
          ({
            id,
            name,
            image,
            current_price,
            market_cap,
            market_cap_change_percentage_24h,
          }) => (
            <div
              key={id}
              className="px-4 rounded-t-lg text-sm text-md md:text-xl lg:text-2xl border-b-[1px] w-full flex justify-between items-center py-3 mt-2 hover:bg-[#200840] duration-100 "
              onClick={() => navigate(`coins/${id}`)}
            >
              <div className="flex gap-2 w-[20%]">
                <img
                  src={image}
                  alt=""
                  className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px] rounded-full "
                />
                <p className="w-max">{name}</p>
              </div>
              <p className="w-[20%]">{current_price}$</p>
              <p
                className={
                  market_cap_change_percentage_24h < 0
                    ? "text-red-600 font-bold w-[20%]"
                    : "text-green-600 font-bold w-[20%]"
                }
              >
                {market_cap_change_percentage_24h.toFixed(2)} %
              </p>
              <p className="hidden md:block">{market_cap}</p>
            </div>
          )
        )}
        <div className="flex items-center justify-center gap-4 pt-10 text-2xl ">
          {[1, 2, 3, 4, 5].map((item) => (
            <p
              onClick={() => {
                setPage(item);
                setData(coinsList?.data?.slice(pageStart, pageEnd));
              }}
              key={item}
              className={
                page === item
                  ? "p-2 px-4 duration-300 border-2 border-white rounded-full hover:bg-slate-950 bg-slate-950"
                  : "p-2 px-4 duration-300 border-2 border-white rounded-full hover:bg-slate-950 bg-slate-900"
              }
            >
              {item}
            </p>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default MarketUpdate;
