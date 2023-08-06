import * as React from "react";
import '../styles.css'

export function Input(props) {
  const { placeholder, onChange, value, type } = props;
  
  return (
      <input 
        className='input'
        type={type}        
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        />
  );
}
