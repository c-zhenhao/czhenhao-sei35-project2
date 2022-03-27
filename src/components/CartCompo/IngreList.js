import React, { useState } from "react";
import IngreModal from "./IngreListModal";

function IngreList({ ingre }) {
  console.log(ingre);
  const [ingreModalState, setIngreModalState] = useState(false);

  // handle modal state on click set to true
  function handleClick() {
    console.log("div is clicked");
    setIngreModalState(true);
    window.open(`https://coldstorage.com.sg/search?q=${ingre}`);
  }

  // handle modal state to false
  function handleModalClose(event) {
    console.log("close the modal");
    setIngreModalState(false);
  }

  return (
    <>
      <div className="drinksModal">
        {ingreModalState && (
          <IngreModal ingre={ingre} exitModal={handleModalClose} />
        )}
      </div>
      <img
        style={{
          width: "250px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          backgroundColor: "#ffffff",
          margin: "1px",
          border: "1px transparent rgba(255,0,0,1)",
        }}
        src={`https://www.thecocktaildb.com/images/ingredients/${ingre}.png`}
        alt={ingre}
        onClick={handleClick}
      ></img>
      <div
        className="searchCardTitle"
        style={{
          height: "50px",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
          backgroundColor: "#4361ee",
          marginLeft: "1px",
          marginTop: "220px",
          textOverflow: "none",
          alignItems: "center",
          fontSize: "1.1rem",
        }}
      >
        <br />
        {ingre}
      </div>
    </>
  );
}

export default IngreList;
