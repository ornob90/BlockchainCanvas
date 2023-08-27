import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CryptoDetail from "./pages/CryptoDetail";
import Home from "./pages/Home";

function App() {
  // const [page, setPage] = useState(1);

  // const { loading, data } = useFetch("/nfts/list");

  const nftIds = {};

  // data?.data.forEach(({ id, name }) => {
  //   nftIds[id] = [id, name];
  // });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
