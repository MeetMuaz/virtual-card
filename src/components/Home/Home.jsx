import React from 'react'
import Styles from './Home.module.css'
import Header from '../Header/Header'
import InputField from '../InputField/InputField'
import VirtualCard from '../VirtualCard/VirtualCard'
import LabelField from '../LabelField/LabelField'

export default function Home() {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Wrapper}>
        <Header />
        <div className={Styles.GridBox}>
          <div className={Styles.Left}>
            <form action="" method="post" className={Styles.Form}>
              <div className={`${Styles.FormGroup} ${Styles.FormBlock}`}>
                <LabelField 
                  margin="1rem"
                  intro="Card Number"
                  info="Enter the 16-digit card number on the card"
                />
                <div className={Styles.Relative}>
                  <InputField 
                    type="number"
                    placeholder="xxxx - xxxx - xxxx xxxx"
                    name="password"
                  />
                  <span className={Styles.McLogo}></span>
                  <img className={Styles.Badge} src="badge.svg" alt="" />
                  <small className={Styles.Edit}>
                    <img src="edit.svg" alt="" />
                     &nbsp; Edit
                  </small>
                </div>
              </div>
              <div className={`${Styles.FormFlex} ${Styles.FormGroup}`}>
                <LabelField
                  intro="CCV Number"
                  info="Enter the 3 0r 4 digit number on the card"
                />
                <InputField 
                  type="number"
                  placeholder="000 / 0000"
                  name="ccv-number"
                />
              </div>
              <div className={`${Styles.FormFlex} ${Styles.FormGroup}`}>
                <LabelField 
                  type="number"
                  intro="Expiry Date"
                  info="Enter the expiration date of the card"
                />
                <div className={Styles.FlexInput}>
                  <InputField 
                    type="number"
                    placeholder="MM"
                    name="month"
                  />
                  <strong>:</strong>
                  <InputField 
                    type="number"
                    placeholder="YY"
                    name="year"
                  />
                </div>
              </div>
              <div className={`${Styles.FormFlex} ${Styles.FormGroup}`}>
                <LabelField
                  type="password"
                  intro="Password"
                  info="Enter your Dynamic password"
                />
                <InputField 
                  placeholder="password"
                  name="password"
                />
              </div>
              <button>Pay Now</button>
            </form>
          </div>
          <div className={Styles.Right}>
            <VirtualCard />
          </div>
        </div>
      </div>
    </div>
  )
}



























