import React, { useState } from "react";
import axios from "axios";
import DiscoverResults from "./DiscoverResults";
import LoadingSpinner from "./LoadingSpinner";
import { NavLink } from "react-router-dom";

import styles from "./DiscoverDrinks.module.css";

function DiscoverDrinks() {
  // states
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // search drinks from API
  const discoverDrinks = async (selection) => {
    setIsLoading(true);

    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selection}`;

    const response = await axios.get(url);
    console.log(response.data);

    const drinksData = response.data.drinks;
    setDrinks(drinksData);

    setIsLoading(false);
  };

  function discoverRum() {
    console.log("discoverRum clicked");
    discoverDrinks("Rum");
  }
  function discoverGin() {
    console.log("discoverGin clicked");
    discoverDrinks("Gin");
  }
  function discoverVodka() {
    console.log("discoverVodka clicked");
    discoverDrinks("Vodka");
  }
  function discoverWhiskey() {
    console.log("discoverWhiskey clicked");
    discoverDrinks("Whiskey");
  }
  function discoverTequila() {
    console.log("discoverTequila clicked");
    discoverDrinks("Tequila");
  }
  function discoverBrandy() {
    console.log("discoverBrandy clicked");
    discoverDrinks("Brandy");
  }

  return (
    <>
      <div className={styles.title}>
        <NavLink
          to="/search"
          className={(navData) => (navData.isActive ? styles.active : "")}
        >
          <h1>Have something in mind already?</h1>
        </NavLink>
      </div>

      <div className={styles.subtitle}>
        <h1>Discover by spirit type</h1>
      </div>

      <div className={styles.discoverContainer}>
        <div className={styles.carousel}>
          <div id={styles.rum} className={styles.item} onClick={discoverRum}>
            <h2>Rum</h2>
          </div>
          <div id={styles.gin} className={styles.item} onClick={discoverGin}>
            <h2>Gin</h2>
          </div>
          <div
            id={styles.vodka}
            className={styles.item}
            onClick={discoverVodka}
          >
            <h2>Vodka</h2>
          </div>
          <div
            id={styles.whiskey}
            className={styles.item}
            onClick={discoverWhiskey}
          >
            <h2>Whiskey</h2>
          </div>
          <div
            id={styles.tequila}
            className={styles.item}
            onClick={discoverTequila}
          >
            <h2>Tequila</h2>
          </div>
          <div
            id={styles.brandy}
            className={styles.item}
            onClick={discoverBrandy}
          >
            <h2>Brandy</h2>
          </div>
        </div>
      </div>

      <div className="searchContainer">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          drinks !== null &&
          drinks.map((drink) => {
            return <DiscoverResults drink={drink} key={drink.idDrink} />;
          })
        )}
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

export default DiscoverDrinks;
