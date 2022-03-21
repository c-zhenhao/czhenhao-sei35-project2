import React from "react";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="title">
        <h2>Search for something to mix...</h2>
      </div>
      <div className="centered">
        <Search />
      </div>
    </Router>
  );
}

export default App;
