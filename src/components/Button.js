import * as React from "react";
import './button.css'

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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="icons icondone"
        onClick={onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
}

export function ButtonPriority(props){
  const {color, onClick} = props

  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="icons iconpriority"
        onClick={onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
  )
}

export function ButtonDelete (props){
  const {color, onClick} = props
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="icons icondelete"
        onClick={onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397" />
      </svg>
  )
}

export function ShowTodosDone (props){
  const {showTodosDone, onClick} = props
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4f5050" className="icons"
        onClick={onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d={showTodosDone ? "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" :
                    "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"} />
      </svg>
  )
}



