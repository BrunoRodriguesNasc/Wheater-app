import React, { createContext, useState } from "react";

const DEFAULT_VALUE = {
  isGraus: true,
  min: [],
  max: [],
};

const TemperatureContext = createContext(DEFAULT_VALUE);

const TemperatureProvider = ({ children }) => {
  const [typeTemper, setTypeTemper] = useState(DEFAULT_VALUE);
  return (
    <TemperatureContext.Provider value={{ typeTemper, setTypeTemper }}>
      {children}
    </TemperatureContext.Provider>
  );
};

export { TemperatureProvider };
export default TemperatureContext;
