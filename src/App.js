import React from "react";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import CustomCursor from "./CustomCursor/CustomCursor";

const App = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <MainPage />
    </>
  );
};

export default App;
