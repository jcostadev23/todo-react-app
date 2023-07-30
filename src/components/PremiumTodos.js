import React, { useState, useEffect } from 'react';
import { ButtonGroup } from '@aws-amplify/ui-react';
import { deleteTodo, fetchTodos } from './EditPremium';
import { handleTodo } from './EditTodos'
import TodosInput from './TodoInput'
import { ButtonDone, ButtonInformation } from './Button'


export function PremiumTodos (){
    const [listTodos, setListTodos] = useState([]);

    useEffect(() => {
        fetchTodos()
         .then(todosFromDB => {
            setListTodos(todosFromDB);
         })
      },[]);

    listTodos && listTodos.sort((a, b)=> a.done - b.done || b.priority - a.priority)
      
    return (
        <div className="flex justify-center ">
            <div>
                <div className='text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r to-emerald-300 from-emerald-200'>Todoco</div>
                <TodosInput listTodos={listTodos}/>
                {listTodos.map((todo)=>(
                    <div className='text-gray-700'
                        key={todo.id}><div className={todo.done ? 'flex w-full text-gray-400' : "flex w-full text-gray-500"}>
                    Task: {todo.task}</div> {todo.priority ? <div as="span"
                        color="var(--amplify-colors-red-60)"
                        >Priority</div> : ""}<div> Date: {new Date(todo.date).toLocaleDateString()} {/* Format Date to "MM/DD/YYYY" */}</div>
                        <ButtonGroup justifyContent='center'>
                            <ButtonDone onClick={()=> handleTodo(todo ,todo.done)}/>
                            <ButtonInformation onClick={()=> deleteTodo(todo.id)}/>
                        </ButtonGroup>
                    </div> 
                ))}
            </div>  
        </div>
    )
}