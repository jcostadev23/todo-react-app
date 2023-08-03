import React, { useState } from 'react';
import { createId, awsDateFormat } from '../helpers/createId';
import { Button, ButtonPriority } from './Button';
import { Input } from './Input';
import { DataStore } from "aws-amplify";
import { Todo } from '../models/index'

export function TodosInput () {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState(false);
   
    async function createTodo (event) {
        event.preventDefault()
        
        if(!task){
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
                <ButtonPriority color={'currentColor'} onClick={()=> checkPriority()}/>
            </div>
            <Button 
                label={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>}
                type='Submit'
                onClick={createTodo}/>
        </form>           
    )
}

