import React, { useState } from 'react';
import { createId } from '../helpers/createId';
import { Button } from './Button';
import { IconPriority, IconAdd } from './svg';
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

    const checkPriority = (event) => {
        event.preventDefault()
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
                <Button className="iconButton" onClick={(event) => checkPriority(event)} label={<IconPriority color={!priority ? '#a0aec0' : 'orange'} />} />
                <Button
                    className={"button button-add"}
                    label={<IconAdd />}
                    type='Button'
                    onClick={(event)=> createTodo(event)} />
            </div>
        </form>
    )
}

