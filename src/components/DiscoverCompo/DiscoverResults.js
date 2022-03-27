import React from "react";

function DiscoverResults({ drink }) {
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
          alt={drink.strDrink}
        ></img>
        <br />
        <div
          className="searchCardTitle"
          style={{
            height: "90px",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            backgroundColor: "#3F37C9",
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

          {drink.strDrink}
        </div>
      </div>
    </>
  );
}

export default DiscoverResults;
