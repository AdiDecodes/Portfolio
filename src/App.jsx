import React, { useState } from "react";
import Home from "./Home";

function App() {
  const handleClickScroll = (idname) => {
    const element = document.getElementById("idname");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Home />
    </>
  );
}

export default App;
