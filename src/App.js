import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import Cart from "./pages/Cart";
import Discover from "./pages/Discover";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="discover" />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
