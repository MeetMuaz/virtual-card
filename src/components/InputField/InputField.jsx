import React from "react";

export default function InputField({ type, placeholder, name }) {
  return (
    <div>
      <input type={type} placeholder={placeholder} name={name} />
    </div>
  );
}
