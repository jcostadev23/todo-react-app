import React, { useState, useEffect } from 'react';
import { fetchTodos } from '../helpers/fetchTodos';
import { sortTodos } from '../helpers/editTodos';
import TodosInput from './TodoInput';
import { Todo } from './Todo';

export function PremiumTodos (){
    const [listTodos, setListTodos] = useState([]);

    useEffect(() => {
        fetchTodos()
            .then(todosFromDB => {
                setListTodos(todosFromDB);
            });

    },[]);

    listTodos && sortTodos(listTodos);
      
    return (
        <div className="flex justify-center ">
            <div>
                <div className='text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-transparent bg-clip-text 
                    bg-gradient-to-r to-emerald-300 from-emerald-200'>Todoco</div>
                <TodosInput listTodos={listTodos}/>
                <Todo listTodos={listTodos}/>
            </div>  
        </div>
    )
}