import * as React from "react";
import './input.css'

export function Input(props) {
  const { placeholder, onChange, value, type, className } = props;
  
  return (
      <input 
        className={`input ${className}`}
        type={type}        
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        />
  );
}
