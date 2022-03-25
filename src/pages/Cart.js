import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CartResults from "../components/CartResults";
import IngreList from "../components/IngreList";

import styles from "../components/CartResults.module.css";

function Cart() {
  const { cartList } = useContext(GlobalContext);
  console.log(cartList);
  console.log(typeof cartList);

  // CREATE INGREDIENTS ARRAY
  const ingre1 = cartList.map(({ ingredient1 }) => ingredient1);
  console.log(ingre1);

  const ingre2 = cartList.map(({ ingredient2 }) => ingredient2);
  console.log(ingre2);

  const ingre3 = cartList.map(({ ingredient3 }) => ingredient3);
  console.log(ingre3);

  const ingre4 = cartList.map(({ ingredient4 }) => ingredient4);
  console.log(ingre4);

  const ingre5 = cartList.map(({ ingredient5 }) => ingredient5);
  console.log(ingre5);

  const ingre6 = cartList.map(({ ingredient6 }) => ingredient6);
  console.log(ingre6);

  const concatIngre = ingre1.concat(ingre2, ingre3, ingre4, ingre5, ingre6);
  console.log(concatIngre);

  const uniqueIngre = [...new Set(concatIngre)];
  console.log(uniqueIngre);

  const cleanIngre = uniqueIngre.filter((element) => {
    return element !== null;
  });

  console.table(cleanIngre);

  return (
    <>
      <div className={styles.title}>
        <h1>⭐ What you need to make your dreams come true ⭐</h1>
      </div>

      <div className={styles.ingreContainer}>
        <div className={styles.ingreCarousel}>
          {cleanIngre.length > 0 ? (
            cleanIngre.map((ingre) => {
              return (
                <div className={styles.item}>
                  <IngreList ingre={ingre} key={Math.random()} />
                </div>
              );
            })
          ) : (
            <div className={styles.ingreList_empty}>
              No ingredients... add some drinks!
            </div>
          )}
        </div>
      </div>

      <div className={styles.title}>
        <h1>🛒 Your Cart 🛒</h1>
      </div>

      <div className="searchContainer">
        {cartList.length > 0 ? (
          cartList.map((drink) => {
            return <CartResults drink={drink} key={drink.id} />;
          })
        ) : (
          <div className="cartList_empty">No list... add some drinks!</div>
        )}
      </div>
    </>
  );
}

export default Cart;
