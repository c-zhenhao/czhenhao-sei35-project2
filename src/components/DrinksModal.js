import React from "react";
import ReactDOM from "react-dom";

import styles from "./DrinksModal.module.css";

function DrinkModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          title={props.title}
          message={props.message}
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
          <h2>{props.title}</h2>
        </header>

        <div className={styles.content}>
          <p>{props.message}</p>
        </div>

        <footer className={styles.actions}></footer>
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
