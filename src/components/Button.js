import * as React from "react";

export function Button(props) {
  const { type, onClick} = props;
  return (
    <button className="text-gray-900 shadow font-medium rounded-lg text-sm px-5 p-2.5 text-center mr-2 mt-2 mb-2 bg-green-300 hover:bg-green-400"
        type={type} 
        onClick={onClick} {...props}>
    </button>
  );
}

export function ButtonDone(props){
  const {color, onClick} = props
  return ( 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
     onClick={onClick} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    )
}

export function ButtonInformation(props){
  const {color, onClick} = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>

  )
}