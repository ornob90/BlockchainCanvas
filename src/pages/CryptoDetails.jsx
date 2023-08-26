import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";
import coinData from "../data/coin-data";
import useFetch from "../hooks/useFetch";
import fetchAPI from "../utils/api";

const CryptoDetails = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const [priceChange24H, setPriceChange24H] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const { id } = useParams();

  const { data, loading } = useFetch(`/coins/${id}`);

  useEffect(() => {
    setName(data?.data?.name);
    setImgUrl(data?.data?.image?.large);
    setMarketCap(data?.data?.market_data?.market_cap?.usd);
    setPriceChange24H(
      data?.data?.market_data?.market_cap_change_percentage_24h
    );
    setDescription(data?.data?.description?.en);
    setPrice(data?.data?.market_data?.current_price?.usd);
  }, [data]);

  // const {
  //   image,
  //   market_data,
  //   price_change_percentage_24h,
  //   description,
  //   market_cap,
  // } = data || {};

  // const price = market_data?.current_price?.usd;
  // const imgUrl = image?.large;

  // useEffect(() => {
  //   getCoinData(`/coins/${id}`);
  // }, []);

  // const getCoinData = (url) => {
  //   setLoading(true);
  //   setData(null);
  //   setError(null);

  //   fetchAPI(url)
  //     .then((res) => {
  //       setLoading(false);
  //       console.log(res?.data);
  //       setData(res);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setError(err);
  //     });
  // };

  return (
    <div className="w-full h-screen min-h-[300px] bg-gradient-to-br from-[#07010B]  via-[#020005] to-[#1B0029] ">
      <ContentWrapper>
        <div className="flex justify-between pt-[10%] text-white items-center">
          <div className="w-[70%] space-y-8">
            <h1 className="text-6xl font-bold">{name}</h1>
            <textarea
              defaultValue={description}
              placeholder="Description"
              className="textarea bg-transparent border border-white textarea-lg w-[80%] h-48 no-scrollbar"
            ></textarea>

            <div className="grid grid-cols-3 text-3xl font-bold">
              <p>Price</p>
              <p>Market Cap</p>
              <p>24h Change</p>
            </div>

            <div className="grid grid-cols-3 text-xl ">
              <p>{price}$</p>
              <p>{marketCap}</p>
              <p
                className={
                  priceChange24H < 0 ? "text-red-600" : "text-green-600"
                }
              >
                {priceChange24H}%
              </p>
            </div>
          </div>
          <div>
            <img src={imgUrl} alt="" />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default CryptoDetails;
