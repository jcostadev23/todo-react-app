import * as React from "react";

export function Button(props) {
  const {label, type, className, onClick} = props

  return (
    <button className={className ? className : "button"}
        type={type} 
        onClick={onClick}>
        {label}
    </button>
  );
}

export function ButtonDone(props){
  const {color, onClick} = props

  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="icons hover:stroke-black"
        onClick={onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
}

export function ButtonPriority(props){
  const {color, onClick} = props

  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="icons hover:stroke-black"
        onClick={onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
  )
}

export function ButtonDelete (props){
  const {color, onClick} = props
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="icons hover:stroke-black"
        onClick={onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397" />
      </svg>
  )
}
export function ShowTodosDone (props){
  const {d, onClick} = props
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className="icons hover:stroke-black"
        onClick={onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
  )
}



