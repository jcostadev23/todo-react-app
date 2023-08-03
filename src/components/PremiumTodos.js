import React, { useState, useEffect } from 'react';
import { filterTodos, sortTodos } from '../helpers/editTodos';
import { TodosInput }  from './TodoInput';
import { Todos } from './Todo';
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';
import { ShowTodosDone } from './Button';

export function PremiumTodos (){
    const [listTodos, setListTodos] = useState([]);
    const [showTodosDone, setShowTodosDone] = useState(null);

    useEffect(() => {
        const subscription = DataStore.observeQuery(Todo).subscribe(msg => {
            setListTodos(msg.items);
          });

    },[]);

    const displayTodosDone = ()=> {
        setShowTodosDone(!showTodosDone)
    }
   
    return (
        <div className="flex justify-center">
            <div>
                <div className='text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-transparent bg-clip-text 
                    bg-gradient-to-r to-emerald-300 from-emerald-200'>Todoco</div>
                    <TodosInput listTodos={listTodos}/>
                    <Todos listTodos={sortTodos(listTodos.filter((todo)=> !todo.done ))}/>
                <div className='flex justify-center m-4'><span className='mr-4'> Completed ( {filterTodos(listTodos).length} ) </span>
                    {filterTodos(listTodos).length !== 0 ? <ShowTodosDone d={showTodosDone ? "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" :
                        "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"}
                        onClick={displayTodosDone}/> : ""} </div>
                    {showTodosDone && <Todos listTodos={filterTodos(listTodos)}/>}    
            </div>  
        </div>
    )
}