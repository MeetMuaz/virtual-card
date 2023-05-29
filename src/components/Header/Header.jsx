import React from "react";
import Styles from "./Header.module.css";

export default function styles() {
  return (
    <header className={Styles.Header}>
      <div className={Styles.Logo}>
        <a href="">
          <span className={Styles.Circle}>
            <img src="logo.svg" alt="" />
          </span>
          <span>
            {" "}
            &nbsp; AceCoin<span className={Styles.Pay}>Pay</span>
          </span>
        </a>
      </div>
      <div className={Styles.Timer}>
        <span className={Styles.Digit}>0</span>
        <span className={Styles.Digit}>1</span>
        <strong>:</strong>
        <span className={Styles.Digit}>3</span>
        <span className={Styles.Digit}>2</span>
      </div>
    </header>
  );
}
