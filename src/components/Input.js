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
    const {type, value, checked, onChange, label} = props;
    
    if (!label) {
        return (
          <input
            className="ml-2 mr-2 rounded hover:bg-gray-100 border-gray"
            type={type}
            value={value}
            checked={checked}
            onChange={onChange}
          />
        );
      }
    
    return (
        <label className="md:w-1/3 block font-medium text-center text-sm text-gray-900 py-2.5">
            <input className="ml-2 mr-2 rounded hover:bg-gray-100 border-gray" 
                type={type}
                value={value}
                checked={checked}
                onChange={onChange}/>
            <span className="text-sm">
                {label}
            </span>
        </label>
    )
}