import * as React from "react";

export function Input(props) {
  const { placeholder, onChange, value, type } = props;
  return (
        <input className='shadow rounded-lg w-full px-4
                focus:outline-none focus:ring-2 focus:ring-gray-500
                text-sm block p-2.5'
        type={type}        
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        />
  );
}
