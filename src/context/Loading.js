import React, { createContext, useState } from "react";

const DEFAULT_VALUE = {
  loading: true,
  setLoading: (loading) => !loading,
};

const LoadingContext = createContext(DEFAULT_VALUE);

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(DEFAULT_VALUE.loading);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider };
export default LoadingContext;
