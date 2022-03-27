import React, { useState } from "react";
import FavDrinksModal from "./FavDrinksModal";

function FavResults({ drink }) {
  console.log(drink);
  const [favModalState, setFavModalState] = useState(false);

  // handle modal state on click set to true
  function handleClick() {
    console.log("div is clicked");
    setFavModalState(true);
  }

  // handle modal state to false
  function handleModalClose(event) {
    console.log("close the modal");
    setFavModalState(false);
  }

  return (
    <>
      <div className="drinksModal">
        {favModalState && (
          <FavDrinksModal
            id={drink.id}
            pic={drink.pic}
            title={drink.title}
            category={drink.category}
            glass={drink.glass}
            ingredient1={drink.ingredient1}
            measure1={drink.measure1}
            ingredient2={drink.ingredient2}
            measure2={drink.measure2}
            ingredient3={drink.ingredient3}
            measure3={drink.measure3}
            ingredient4={drink.ingredient4}
            measure4={drink.measure4}
            ingredient5={drink.ingredient5}
            measure5={drink.measure5}
            ingredient6={drink.ingredient6}
            measure6={drink.measure6}
            instructions={drink.instructions}
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
          src={drink.pic}
          alt={drink.title}
          onClick={handleClick}
        ></img>
        <br />
        <div
          className="searchCardTitle"
          style={{
            height: "90px",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            backgroundColor: "#F72585",
            marginTop: "-45px",
            marginLeft: "2px",
            marginRight: "2px",
            textOverflow: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.1rem",
            paddingTop: "15px",
          }}
        >
          <br></br>
          {drink.title}
        </div>
      </div>
    </>
  );
}

export default FavResults;
