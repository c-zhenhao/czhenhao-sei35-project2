import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import LoadingSpinner from "../LoadingSpinnerCompo/LoadingSpinner";

function SearchDrink() {
  // states
  const [drinks, setDrinks] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // handle input
  function handleInput(event) {
    console.log(event.target.value);
    setInput(event.target.value);
  }

  // handle submit
  function handleSubmit() {
    searchDrinks(input);
  }

  // handle submit
  function handleRandomSubmit() {
    searchRandomDrink();
  }

  // search drinks from API
  const searchDrinks = async (input) => {
    setIsLoading(true);

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;

    const response = await axios.get(url);
    console.log(response.data);

    const drinksData = response.data.drinks;
    setDrinks(drinksData);

    setIsLoading(false);
  };

  // get random drink from API
  const searchRandomDrink = async () => {
    setIsLoading(true);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

    const response = await axios.get(url);
    console.log(response.data);

    const drinksData = response.data.drinks;
    setDrinks(drinksData);

    setIsLoading(false);
  };

  return (
    <>
      <div className="title">
        <h1>🍹 What would you like to drink? 🍸</h1>
      </div>

      <div className="searchBar">
        <input
          className="searchBox"
          placeholder="feeling thirsty..."
          type="text"
          value={input}
          onChange={handleInput}
        ></input>
        <button className="searchButton" onClick={handleSubmit}>
          🔎
        </button>
        <button className="randomButton" onClick={handleRandomSubmit}>
          🎲
        </button>
      </div>

      <div className="searchContainer">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          drinks !== null &&
          drinks.map((drink) => {
            return <SearchResults drink={drink} key={drink.idDrink} />;
          })
        )}
        {drinks == null ? (
          <div className="empty">
            <br />
            no drinks found...{" "}
            <small>
              <sup>(blame the API... not me...)</sup>
            </small>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SearchDrink;
