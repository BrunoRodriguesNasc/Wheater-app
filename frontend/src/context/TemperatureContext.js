import React, { createContext, useState } from "react";

const DEFAULT_VALUE = {
  min: 0,
  max: 0,
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
