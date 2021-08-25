import React, { useContext, useState, useEffect, Fragment } from "react";
import InfoClimaContext from "./context/InfoClimaContext";
import LoadingContext from "./context/Loading";
import Loading from "./components/loading/Loading";
import { getWorldId } from "./api/apiService";
import SideContainer from "./components/sideContainer/index";
import Container from "./components/mainContainer/index";
import Modal from "./components/modal/Modal";
import "./App.css";

function App() {
  const [infoClima, setInfo] = useState("London");
  const { temperature } = useContext(InfoClimaContext);
  const { loading, setLoading } = useContext(LoadingContext);

  async function allInfo(nameLocation) {
    temperature.temperature.max = [];
    temperature.temperature.min = [];

    const infoLocation = await getWorldId(nameLocation);

    setInfo(infoLocation);

    infoLocation.consolidated_weather.map((location) => {
      temperature.temperature.max.push(location.max_temp);
      temperature.temperature.min.push(location.min_temp);
    });
  }

  useEffect(async () => {
    await allInfo(infoClima);

    setLoading(false);
  }, []);

  const getName = (name) => {
    allInfo(name);
  };

  if (loading) return <Loading></Loading>;
  return (
    <div className="App">
      <SideContainer getName={getName} info={infoClima}></SideContainer>
      <Container info={infoClima}></Container>
    </div>
  );
}

export default App;
