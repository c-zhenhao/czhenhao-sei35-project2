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
    // get response from API
    const response = await axios.get(url);

    // check response from API
    console.log(response.data);

    const drinksData = response.data.drinks;

    if (drinksData === null) {
      setDrinks("");
    } else {
      setDrinks(drinksData);
    }
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
        {drinks.map((drink) => {
          return <SearchResults drink={drink} key={drink.idDrink} />;
        })}
      </div>
    </>
  );
}

export default Search;
