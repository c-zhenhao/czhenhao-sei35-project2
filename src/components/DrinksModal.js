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
          tags={props.tags}
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
  const { addDrinksToFavList, favList } = useContext(GlobalContext);

  console.log(favList);
  let storedDrink = favList.find((obj) => obj.id === props.id);
  console.log(storedDrink);

  const favListDisabled = storedDrink ? true : false;

  return (
    <div className={styles.backdrop}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <img src={props.pic}></img>
          <h2>{props.pic}</h2>
        </header>

        <div className={styles.content}>
          <p>{props.title}</p>
          <p>{props.tags}</p>
          <p>{props.glass}</p>
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
          <p>{props.instructions}</p>
          <p>{props.id}</p>
        </div>

        <footer className={styles.actions}>
          <button
            className="favButton"
            onClick={() => {
              addDrinksToFavList(props);
            }}
            disabled={favListDisabled}
          >
            add to favourites
          </button>
          <button onClick={props.exitModal}>close modal</button>
        </footer>
      </div>
    </div>
  );
};

export default DrinkModal;
