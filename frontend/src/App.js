
import React, { useContext, useState, useEffect, useCallback } from "react";
import InfoClimaContext from "./context/InfoClimaContext";
import LoadingContext from "./context/Loading";
import Loading from "./components/loading/Loading";
import { getWheater } from "./api/apiService";
import SideContainer from "./components/sideContainer/index";
import Container from "./components/mainContainer/index";
import "./App.css";

function App() {
  const [city, setCity] = useState("London");
  const { setTemp } = useContext(InfoClimaContext);
  const { loading, setLoading } = useContext(LoadingContext);

  const fetchData = useCallback(async () => {
    const { data } = await getWheater(city, 5);
    setTemp(data);
    setLoading(false);
  }, [city, setTemp]);

  useEffect(() => {
    fetchData()
      .catch(console.error);
  }, [fetchData, setLoading])

  if (loading) return <Loading></Loading>;

  return (
    <div className="App">
      <SideContainer getName={setCity}></SideContainer>
      <Container></Container>
    </div>
  );
}

export default App;
