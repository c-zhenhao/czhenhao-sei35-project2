import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

function Search() {
  // states
  const [drinks, setDrinks] = useState([]);
  const [input, setInput] = useState("");

  // useeffect only on submit
  // useEffect(() => {
  //   console.log(`useEFfect is called`);
  //   searchDrinks("");
  // }, []);

  // handle input
  function handleInput(event) {
    console.log(event.target.value);
    setInput(event.target.value);
  }

  // handle submit
  function handleSubmit() {
    searchDrinks(input);
  }

  // search drinks from API
  const searchDrinks = async (input) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;

    const response = await axios.get(url);
    console.log(response.data);

    const drinksData = response.data.drinks;
    setDrinks(drinksData);
  };

  return (
    <>
      <div className="title">
        <h1>Search for something to mix...</h1>
      </div>

      <div className="searchBar">
        <input
          className="searchBox"
          placeholder="feeling thirsty..."
          type="text"
          value={input}
          onChange={handleInput}
        ></input>
        <button onClick={handleSubmit}>search</button>
      </div>

      <div className="searchContainer">
        {drinks !== null &&
          drinks.map((drink) => {
            return <SearchResults drink={drink} key={drink.idDrink} />;
          })}
        {drinks == null ? (
          <div className="empty">
            no drinks found... (blame the API... not me...)
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Search;
