import { useEffect, useState } from "react";
import Drop from "./components/Drop";
import HeroBanner from "./components/HeroBanner";
import JoinUs from "./components/JoinUs";
import MarketUpdate from "./components/MarketUpdate";
import Marketplace from "./components/Marketplace";
import Navbar from "./components/Navbar";
import NftContext from "./context/NftContext";
import useFetch from "./hooks/useFetch";
import fetchAPI from "./utils/api";

function App() {
  // const [page, setPage] = useState(1);

  // const { loading, data } = useFetch("/nfts/list");

  const nftIds = {};

  // data?.data.forEach(({ id, name }) => {
  //   nftIds[id] = [id, name];
  // });

  return (
    <NftContext.Provider value={nftIds}>
      <Navbar />
      <HeroBanner />
      <Marketplace />
      <MarketUpdate />
      <Drop />
      <JoinUs />
    </NftContext.Provider>
  );
}

export default App;
