import React, { useState } from 'react';
import { createId } from '../helpers/createId';
import { Button, ButtonPriority } from './Button';
import { Input } from './Input';
import { DataStore } from "aws-amplify";
import { Todo } from '../models/index';
import '../styles.css';

export function TodosInput() {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState(false);
    const [date, setDate] = useState("")

    async function createTodo(event) {
        event.preventDefault()

        if (!task) {
            return
        }

        const todo = {
            id: createId(),
            task: task.charAt(0).toUpperCase() + task.slice(1),
            priority: priority,
            done: false,
            date: (date ? date : null),
        }

        await DataStore.save(new Todo(todo))
        setPriority(false)
        setTask("")
        setDate("")

    }

    const checkPriority = () => {
        setPriority(!priority)
    }

    const inputField = (event) => {
        setTask(event.target.value)
    }

    return (
        <form className='form' onSubmit={createTodo}>
            <Input
                className="input-grow"
                type="text"
                placeholder='New Todo...'
                value={task}
                onChange={inputField} />
            <div className='mobile-form'>
                <Input
                    type="date"
                    onChange={(e) => { setDate(e.target.value) }}
                    value={date} />
                <ButtonPriority color={!priority ? '#a0aec0' : 'orange'}
                    onClick={() => checkPriority()} />
                <Button
                    className={"button button-add"}
                    label={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="icons">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    }
                    type='Button'
                    onClick={createTodo} />
            </div>
        </form>

    )
}

