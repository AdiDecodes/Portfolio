import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Contact from "./Pages/Contact/Contact";
import Aboutme from "./Pages/Aboutme/Aboutme";
import Work from "./Pages/Work/Work";
import Error from "./Pages/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/project" element={<Work />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </>
);
