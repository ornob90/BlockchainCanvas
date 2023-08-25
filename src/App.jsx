import { useEffect } from "react";
import HeroBanner from "./components/HeroBanner";
import fetchAPI from "./utils/api";

function App() {
  // useEffect(() => {
  //   testAPI();
  // });

  // const testAPI = () => {
  //   fetchAPI(`/coins/list`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <HeroBanner />
    </>
  );
}

export default App;
