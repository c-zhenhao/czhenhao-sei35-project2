import React, { useContext } from "react";
import ReactDOM from "react-dom";

import styles from "./DrinksModal.module.css";

import { GlobalContext } from "../context/GlobalState";

function DrinkModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          id={props.id}
          pic={props.pic}
          title={props.title}
          category={props.category}
          glass={props.glass}
          ingredient1={props.ingredient1}
          measure1={props.measure1}
          ingredient2={props.ingredient2}
          measure2={props.measure2}
          ingredient3={props.ingredient3}
          measure3={props.measure3}
          ingredient4={props.ingredient4}
          measure4={props.measure4}
          ingredient5={props.ingredient5}
          measure5={props.measure5}
          ingredient6={props.ingredient6}
          measure6={props.measure6}
          instructions={props.instructions}
          exitModal={props.exitModal}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
}

const OverLay = (props) => {
  const { addDrinksToFavList, favList, addToCart, cartList } =
    useContext(GlobalContext);

  console.log(favList);
  console.log(cartList);

  let storedDrink = favList.find((obj) => obj.id === props.id);
  console.log(storedDrink);

  let storedCart = cartList.find((obj) => obj.id === props.id);
  console.log(storedCart);

  const favListDisabled = storedDrink ? true : false;
  const CartListDisabled = storedCart ? true : false;

  return (
    <div className={styles.backdrop}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <div className={styles.headerImage}>
            <img src={props.pic}></img>
          </div>

          <div className={styles.headerContent}>
            <h2>{props.title}</h2>
            <p>
              <strong>Category: </strong>
              {props.category}
            </p>
            <p>
              <strong>Glass: </strong>
              {props.glass}
            </p>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <p>
              <strong>Ingredients: </strong>
            </p>
            <p>
              {props.measure1} {props.ingredient1}
            </p>
            <p>
              {props.measure2} {props.ingredient2}
            </p>
            <p>
              {props.measure3} {props.ingredient3}
            </p>
            <p>
              {props.measure4} {props.ingredient4}
            </p>
            <p>
              {props.measure5} {props.ingredient5}
            </p>
            <p>
              {props.measure6} {props.ingredient6}
            </p>
          </div>

          <div className={styles.contentRight}>
            <p>
              <strong>Instructions: </strong>
            </p>
            <p>{props.instructions}</p>
          </div>
        </div>

        <footer className={styles.actions}>
          <p>
            <strong>Drink ID: </strong> {props.id}
          </p>
          <button
            className={styles.cartButton}
            onClick={() => {
              addToCart(props);
            }}
            disabled={CartListDisabled}
          >
            🛒
          </button>
          <button
            className={styles.favButton}
            onClick={() => {
              addDrinksToFavList(props);
            }}
            disabled={favListDisabled}
          >
            ❤️
          </button>
          <button className={styles.closeButton} onClick={props.exitModal}>
            ❌
          </button>
        </footer>
      </div>
    </div>
  );
};

export default DrinkModal;
