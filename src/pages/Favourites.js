import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Favourites() {
  const { favList } = useContext(GlobalContext);
  console.log(favList);
  console.log(typeof favList);

  return (
    <>
      <div className="title">
        <h1>your favourites</h1>
      </div>

      {favList.length > 0 ? (
        <div className="favCard">
          <h2>{favList[0].title}</h2>
        </div>
      ) : (
        <div className="favCard_empty">no favourites... add some!</div>
      )}
    </>
  );
}

export default Favourites;
