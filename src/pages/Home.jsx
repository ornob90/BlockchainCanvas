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
import CryptoDetails from "../pages/cryptoDetails";
import fetchAPI from "../utils/api";

function Home() {
  // const [page, setPage] = useState(1);
  const nftIds = {};

  const params = {
    vs_currency: "usd",
  };

  // const { loading, data: coinsList } = useFetch("/coins/markets", params);
  // console.log(coinsList);

  // data?.data.forEach(({ id, name }) => {
  //   nftIds[id] = [id, name];
  // });

  return (
    <NftContext.Provider value={nftIds}>
      <HeroBanner />
      <Marketplace />
      <MarketUpdate />
      <Drop />
      <CreateSell />
      <Topcreator />
      <WhyChooseUs />
      <JoinUs />
      <Footer />
    </NftContext.Provider>
  );
}

export default Home;
