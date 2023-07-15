import * as React from "react";

export function Button(props) {
  const { type, onClick} = props;
  return (
    <button className="text-gray-900 shadow font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-gray-100"
        type={type} 
        onClick={onClick} {...props}>
    </button>
  );
}