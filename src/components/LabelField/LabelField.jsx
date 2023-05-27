import React from 'react'
import Styles from './LabelField.module.css';

export default function LabelField({intro, info, margin}) {
  return (
    <div>
      <label className={Styles.Label}>
          <p>{intro}</p>
          <span>{info}</span>
      </label>
    </div>
  )
}
