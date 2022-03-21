import React from "react";

function SearchResults({ drink }) {
  console.log(drink);

  return (
    <>
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
