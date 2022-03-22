import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import PageOne from "./pages/PageOne";
import Favourites from "./pages/Favourites";
import Kitchen from "./pages/Kitchen";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="page-one" />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </div>
  );
}

export default App;
