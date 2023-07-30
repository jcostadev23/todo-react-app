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

export function Checkbox(props){
    const {type, value, checked, onChange} = props;
  
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
            type={type}
            value={value}
            checked={checked}
            onChange={onChange}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        );
      }
  