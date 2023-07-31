import React, { useState } from 'react';
import { createId, awsDateFormat } from '../helpers/createId';
import { Button, ButtonPriority } from './Button';
import { Input } from './Input';
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
            date: awsDateFormat
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
            
                <ButtonPriority onClick={()=> checkPriority()}/>
            </div>
            <Button 
                label='Add'
                type='Submit'
                onClick={createTodo}/>
        </form>           
    )
}

