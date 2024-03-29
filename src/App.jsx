import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "@/pages/Main";

function App() {
  return (
    <BrowserRouter basename="/Delivery">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/delivery" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
