import React from 'react';
import { useState } from 'react';
import { createId } from '../tools/createId';
import { Button } from './Button';
import { Checkbox, Input } from './Input';

export default function Todos ({listTodos, setListTodos, }) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState(false);
   
    async function createTodo (event) {
        
        if(!task){
            event.preventDefault()
            return
        }
 
        const todo = {   
            id: createId(),
            task: task.charAt(0).toUpperCase()+ task.slice(1),
            priority: priority,
            done: false,
        }
       
        addTodo(todo)
        setPriority(false)
        setTask('')
    }

    const addTodo = (todo)=>{
        const newListTodos = listTodos ? [...listTodos, todo] : [todo]
        setListTodos(newListTodos)
        localStorage.setItem('listTodos', JSON.stringify(newListTodos))
    }
    
    const checkPriority = ()=>{
            setPriority(!priority)
        }

    const inputField = (event)=> {
        setTask(event.target.value)
    }
  
    return (
        <form className='mb-8'>
            <div className="flex mt-4">
                <Input
                    type="text" 
                    placeholder='Add Task'
                    value={task}
                    onChange={inputField}/>
            </div>
            <div className="flex mt-2">
                <Checkbox
                    type="checkbox"
                    value='true'
                    checked={priority}
                    onChange={checkPriority}
                    label='Priority'/>
            </div>
            <Button 
                type='submit'
                onClick={createTodo}>
                Add Task
            </Button> 
        </form>           
    )
}

