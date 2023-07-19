import React, { useState, useEffect} from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../models';
import Todos from './Todo.logic'

export function PremiumTodos (){
    const [listTodos, setListTodos] = useState([]);
    const [premium, setPremium] = useState(false)

    useEffect(() => {
        fetchTodos();
      }, []);

    async function fetchTodos() {
        try {
        const todoFiles = await DataStore.query(Todo);
        setListTodos(todoFiles)
        return todoFiles;
        } catch (error) {
        console.log('Error fetching todos:', error);
        return [];
        }
    }

    return (
        <div className="h-100 w-full flex items-center p-2 justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-4 w-full lg:w-3/4 lg:max-w-lg">
                <h1 className="text-grey-darkest text-xl">Premium</h1> 
                <Todos
                    listTodos={listTodos}
                    setListTodos={setListTodos}
                    premium={premium}/>  
                {listTodos.map((todo)=>(
                    <div key={todo.id}> Task: {todo.task} {todo.priority ? <div>Priority</div> : ""} {!todo.done ? <div>Not Done</div> : ""} Date: {todo.date}</div>
                ))}
        </div>
        </div>
    )
}