import React from "react";
import Styles from "./VirtualCard.module.css";

export default function VirtualCard() {
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.CardWrapper}>
        <div className={Styles.BlueBox} />
        <div className={Styles.Card}>
          <span className={Styles.Chip}>
            <img src="sim.svg" alt="" />
          </span>
          <span className={Styles.Wifi}>
            <img src="connect.svg" alt="" />
          </span>
          <span className={Styles.McLogo} />
          <span className={Styles.Exp}>07 / 23</span>
          <span className={Styles.Master}>mastercard</span>
          <div className={Styles.CardDetail}>
            <p>Jonathan Michael</p>
            <p>&middot;&middot;&middot;&middot; 3456</p>
          </div>
        </div>
      </div>
      <ul className={Styles.Product}>
        <li>
          <span>Company</span>
          <span>
            <img src="apple.svg" alt="" /> Apple
          </span>
        </li>
        <li>
          <span>Order Number</span>
          <span>1266201</span>
        </li>
        <li>
          <span>Product</span>
          <span>MackBook Air</span>
        </li>
        <li>
          <span>VAT(20%)</span>
          <span>$100.00</span>
        </li>
      </ul>
      <div className={Styles.Circle1}></div>
      <div className={Styles.Circle2}></div>

      <div className={Styles.Line} />

      <div className={Styles.Recipt}>
        <div>
          <p>You have to Pay</p>
          <h3>
            549<span className={Styles.Percentage}>.99</span>{" "}
            <span className={Styles.Currency}>USD</span>
          </h3>
        </div>
        <img src="recipt.svg" alt="" />
      </div>
    </div>
  );
}
