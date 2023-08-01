import React, { useState, useEffect } from 'react';
import { sortTodos } from '../helpers/editTodos';
import { TodosInput }  from './TodoInput';
import { Todos } from './Todo';
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';

export function PremiumTodos (){
    const [listTodos, setListTodos] = useState([]);

    useEffect(() => {
        const subscription = DataStore.observeQuery(Todo).subscribe(msg => {
            setListTodos(msg.items);
          });

    },[]);
   
    return (
        <div className="flex justify-center ">
            <div>
                <div className='text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-transparent bg-clip-text 
                    bg-gradient-to-r to-emerald-300 from-emerald-200'>Todoco</div>
                <TodosInput listTodos={listTodos}/>
                <Todos listTodos={sortTodos(listTodos.filter((todo)=> !todo.done ))}/>
                <div className='text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-transparent bg-clip-text 
                    bg-gradient-to-r to-emerald-300 from-emerald-200'>Todos Done</div>
                <Todos listTodos={listTodos.filter((todo)=> todo.done)}/>
            </div>  
        </div>
    )
}