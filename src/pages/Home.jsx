import CreateSell from "../components/CreateSell";
import Drop from "../components/Drop";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import JoinUs from "../components/JoinUs";
import MarketUpdate from "../components/MarketUpdate";
import Marketplace from "../components/Marketplace";

import Topcreator from "../components/Topcreator";
import WhyChooseUs from "../components/WhyChooseUs";
import NftContext from "../context/NftContext";
import CryptoContext from "../context/cryptoContext";
import useFetch from "../hooks/useFetch";
import fetchAPI from "../utils/api";
import CryptoDetails from "./cryptoDetails";

function Home() {
  const nftIds = {};

  return (
    <>
      <HeroBanner />
      <MarketUpdate />
      <Marketplace />
      <Drop />
      <CreateSell />
      <Topcreator />
      <WhyChooseUs />
      <JoinUs />
      <Footer />
    </>
  );
}

export default Home;
