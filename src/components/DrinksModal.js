import React from "react";
import ReactDOM from "react-dom";

import styles from "./DrinksModal.module.css";

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
  return (
    <div className={styles.backdrop} onClick={props.exitModal}>
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

        <footer className={styles.actions}></footer>
        <button>add to favourites</button>
        <button>+</button>
        <div className="counter">0</div>
        <button>-</button>
      </div>
    </div>
  );
};

export default DrinkModal;

// import React from "react";
// import ReactDOM from "react-dom";

// import styles from "./ErrorModal.module.css";
// import Button from "./Button";

// function ErrorModal(props) {
//   return (
//     <>
//       {ReactDOM.createPortal(
//         <OverLay
//           title={props.title}
//           message={props.message}
//           okayClicked={props.okayClicked}
//         />,
//         document.querySelector("#modal-root")
//       )}
//     </>
//   );
// }

// const OverLay = (props) => {
//   return (
//     <div className={styles.backdrop} onClick={props.okayClicked}>
//       <div className={`${styles.board} ${styles.modal}`}>
//         <header className={styles.header}>
//           <h2>{props.title}</h2>
//         </header>
//         <div className={styles.content}>
//           <p>{props.message}</p>
//         </div>

//         <footer className={styles.actions}>
//           <Button onClick={props.okayClicked}>OK</Button>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default ErrorModal;
