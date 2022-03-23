import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import FavResults from "../components/FavResults";

function Favourites() {
  const { favList } = useContext(GlobalContext);
  console.log(favList);
  console.log(typeof favList);

  return (
    <>
      <div className="title">
        <h1>Your favourites</h1>
      </div>

      <div className="searchContainer">
        {favList.length > 0 ? (
          favList.map((drink) => {
            return <FavResults drink={drink} key={drink.id} />;
          })
        ) : (
          <div className="favCard_empty">no favourites... add some!</div>
        )}
      </div>
    </>
  );
}

export default Favourites;
