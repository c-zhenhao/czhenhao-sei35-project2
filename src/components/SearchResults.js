import React from "react";

function SearchResults({ drink }) {
  console.log(drink);

  return (
    <>
      <div className="searchCard">
        <img
          style={{
            width: "160px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            margin: "2px",
            border: "2px transparent rgba(255,0,0,1)",
          }}
          src={drink.strDrinkThumb}
        ></img>
        <br />
        <div
          className="searchCardTitle"
          style={{
            height: "90px",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            backgroundColor: "rgba(165,55,253,0.3)",
            marginTop: "-35px",
            marginLeft: "2px",
            marginRight: "2px",
            textOverflow: "none",
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
