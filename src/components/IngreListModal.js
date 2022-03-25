import React from "react";
import ReactDOM from "react-dom";

import styles from "./IngreListModal.module.css";

function IngreListModal(props) {
  console.log(props);
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay ingre={props.ingre} exitModal={props.exitModal} />,
        document.querySelector("#modal-root")
      )}
    </>
  );
}

const OverLay = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <div className={styles.headerImage}>
            <img
              src={`https://www.thecocktaildb.com/images/ingredients/${props.ingre}-small.png`}
              alt={props.ingre}
            ></img>
          </div>

          <div className={styles.headerContent}>
            <h2>{props.ingre}</h2>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <p>
              or choose your favourite eCommerce platform... (i linked the query
              in the url already! 🧐 )
            </p>
          </div>
          <div className={styles.contentRight}>
            <a href={`https://coldstorage.com.sg/search?q=${props.ingre}`}>
              <img
                className={styles.image}
                src="https://d3ckgtbv0fk1sf.cloudfront.net/media/uploads/images/77179a50b0b87c8d5d69bc9564f40085.png"
                alt="coldstorage"
              ></img>
            </a>

            <a href={`https://shengsiong.com.sg/search/${props.ingre}`}>
              <img
                className={styles.image}
                src="https://s3-ap-southeast-1.amazonaws.com/shengsiongcontent/wp-content/uploads/2020/06/01112211/SS_logo_eng_plain-e1590981996889.jpg"
                alt="shengsiong"
              ></img>
            </a>

            <a
              href={`https://www.fairprice.com.sg/search?query=${props.ingre}`}
            >
              <img
                className={styles.image}
                src="https://theme.zdassets.com/theme_assets/2115944/95fc6603504ec0ada9cbcefae9c21cf3cd512eab.png"
                alt="fairprice"
              ></img>
            </a>

            <a href={`https://giant.sg/search?q=${props.ingre}`}>
              <img
                className={styles.image}
                src="https://d34sur1hfhbnek.cloudfront.net/media/MRDF6XSDV62898KC70KWVP0VJM.png"
                alt="giant"
              ></img>
            </a>

            <a href={`https://shopee.sg/search?keyword=${props.ingre}`}>
              <img
                className={styles.image}
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/ca5d12864c12916c05640b36e47ac5c9.png"
                alt="shopee"
              ></img>
            </a>

            <a href={`https://www.lazada.sg/catalog/?q=${props.ingre}`}>
              <img
                className={styles.image}
                src="https://img.alicdn.com/tfs/TB1NbbEPqL7gK0jSZFBXXXZZpXa-564-250.png"
                alt="redmart"
              ></img>
            </a>
          </div>
        </div>

        <footer className={styles.actions}>
          <button className={styles.closeButton} onClick={props.exitModal}>
            ❌
          </button>
        </footer>
      </div>
    </div>
  );
};

export default IngreListModal;
