import React, { createContext, useState } from "react";

const DEFAULT_VALUE = {
  temperature: {
    max: [],
    min: [],
  },
  isGraus: true,
  setTemp: () => {},
};

const InfoClimaContext = createContext(DEFAULT_VALUE);

const InfoClimaProvider = ({ children }) => {
  const [temperature, setTemp] = useState(DEFAULT_VALUE);
  return (
    <InfoClimaContext.Provider value={{ temperature, setTemp }}>
      {children}
    </InfoClimaContext.Provider>
  );
};

export { InfoClimaProvider };
export default InfoClimaContext;
