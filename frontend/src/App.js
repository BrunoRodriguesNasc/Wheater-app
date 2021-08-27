import React, { useContext, useState, useEffect } from "react";
import InfoClimaContext from "./context/InfoClimaContext";
import LoadingContext from "./context/Loading";
import TemperatureContext from "./context/TemperatureContext";
import Loading from "./components/loading/Loading";
import { getWorldId } from "./api/apiService";
import SideContainer from "./components/sideContainer/index";
import Container from "./components/mainContainer/index";
import "./App.css";

function App() {
  const [infoClima, setInfo] = useState("London");
  const { temperature, setTemp } = useContext(InfoClimaContext);
  const { typeTemper, setTypeTemper } = useContext(TemperatureContext);
  const { loading, setLoading } = useContext(LoadingContext);

  async function allInfo(nameLocation) {
    const infoLocation = await getWorldId(nameLocation);
    setInfo(infoLocation);

    setTemp({
      ...infoLocation,
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await allInfo(infoClima);
      setLoading(false);
      return response;
    };
    fetchData();
  }, []);

  const getName = (name) => {
    allInfo(name);
  };

  if (loading) return <Loading></Loading>;
  return (
    <div className="App">
      <SideContainer getName={getName}></SideContainer>
      <Container></Container>
    </div>
  );
}

export default App;
