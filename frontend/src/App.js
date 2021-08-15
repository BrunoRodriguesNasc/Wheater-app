import React, { useContext } from "react";
import InfoClimaContext from "./context/InfoClimaContext";
import { getWorldId } from "./api/apiService";
import SideContainer from "./components/sideContainer/index";
import Container from "./components/mainContainer/index";
import { useState } from "react";
import "./App.css";

function App() {
  const [infoClima, setInfo] = useState([]);
  const { temperature } = useContext(InfoClimaContext);

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

  const getName = (name) => {
    allInfo(name);
  };

  return (
    <div className="App">
      <SideContainer getName={getName} info={infoClima}></SideContainer>
      <Container info={infoClima}></Container>
    </div>
  );
}

export default App;
