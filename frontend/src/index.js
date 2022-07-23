import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { InfoClimaProvider } from "./context/InfoClimaContext";
import { LoadingProvider } from "./context/Loading";
import { TemperatureProvider } from "./context/TemperatureContext";

ReactDOM.render(
  <TemperatureProvider>
    <InfoClimaProvider>
      <LoadingProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </LoadingProvider>
    </InfoClimaProvider>
  </TemperatureProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
