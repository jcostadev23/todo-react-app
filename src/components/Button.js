import * as React from "react";
import './button.css'

export function Button(props) {
  const { label, type, className, onClick } = props

  return (
    <button className={className ? className : "button"}
      type={type}
      onClick={onClick}>
      {label}
    </button>
  );
}