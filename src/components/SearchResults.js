import React, { useState } from "react";
import DrinksModal from "./DrinksModal";

function SearchResults({ drink }) {
  console.log(drink);
  const [modalState, setModalState] = useState(false);

  // handle modal state on click set to true
  function handleClick() {
    console.log("div is clicked");
    setModalState(true);
  }

  // handle modal state to false
  function handleModalClose(event) {
    console.log("close the modal");
    setModalState(false);
  }

  return (
    <>
      <div className="drinksModal">
        {modalState && (
          <DrinksModal
            title={drink.strDrink}
            message={drink.strVideo}
            exitModal={handleModalClose}
          />
        )}
      </div>
      <div className="searchCard">
        <img
          style={{
            width: "300px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            margin: "2px",
            border: "2px transparent rgba(255,0,0,1)",
          }}
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          onClick={handleClick}
        ></img>
        <br />
        <div
          className="searchCardTitle"
          style={{
            height: "90px",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            backgroundColor: "rgba(0,0,255,1)",
            marginTop: "-45px",
            marginLeft: "2px",
            marginRight: "2px",
            textOverflow: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br></br>
          <br></br>
          {drink.strDrink}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
