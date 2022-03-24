import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CartResults from "../components/CartResults";

function Cart() {
  const { cartList } = useContext(GlobalContext);
  console.log(cartList);
  console.log(typeof cartList);

  return (
    <>
      <div className="title">
        <h1>Your list</h1>
      </div>

      <div className="searchContainer">
        {cartList.length > 0 ? (
          cartList.map((drink) => {
            return <CartResults drink={drink} key={drink.id} />;
          })
        ) : (
          <div className="cartList_empty">No list... add some!</div>
        )}
      </div>
    </>
  );
}

export default Cart;
