import React from 'react';
import { useState } from 'react';
import { createId } from '../tools/createId';
import { Button } from './Button';
import { Checkbox, Input } from './Input';
import { DataStore } from "aws-amplify";
import { Todo } from '../models/index'

export default function Todos () {
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
       
        await DataStore.save(new Todo(todo))
        setPriority(false)
        setTask('')
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
            
                <Checkbox
                    type="checkbox"
                    value='true'
                    checked={priority}
                    onChange={checkPriority}
                    />
            </div>
            <Button 
                type='submit'
                onClick={createTodo}>
                Add Task
            </Button> 
        </form>           
    )
}

