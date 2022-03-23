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
          ingredient3={props.ingredient2}
          measure3={props.measure3}
          instructions={props.instructions}
          exitModal={props.exitModal}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
}

const OverLay = (props) => {
  const { addDrinksToFavList } = useContext(GlobalContext);
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
          <p>{props.ingredient1}</p>
          <p>{props.measure1}</p>
          <p>{props.ingredient2}</p>
          <p>{props.measure2}</p>
          <p>{props.ingredient3}</p>
          <p>{props.measure3}</p>
          <p>{props.instructions}</p>
          <p>{props.id}</p>
        </div>

        <footer className={styles.actions}>
          <button
            onClick={() => {
              addDrinksToFavList(props);
            }}
          >
            add to favourites
          </button>
          <button>-</button>
          <div className="counter" style={{ color: "black" }}>
            0
          </div>
          <button>+</button>
          <button onClick={props.exitModal}>close modal</button>
        </footer>
      </div>
    </div>
  );
};

export default DrinkModal;
