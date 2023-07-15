import { useState } from 'react';
import Todos from './Todo.logic';
import { Button } from './Button';
import { Checkbox } from './Input';
import { handleComplete, 
    handleIncomplete, 
    deleteTodo, 
    clearStorage, 
    checkBox } from './EditTodos';

export default function ListTodos () {
    const [listTodos, setListTodos] = useState(JSON.parse(localStorage.getItem(('listTodos') || '[]')));
    const [selectedTodos, setSelectedTodos] = useState([]);

   listTodos && listTodos.sort((a, b)=> a.done - b.done || b.priority - a.priority)

    return (
        <div className="h-100 w-full flex items-center p-2 justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest text-xl">To-Do List</h1>  
                    <Todos 
                        listTodos={listTodos} 
                        setListTodos={setListTodos}
                        />
                </div>
                <div className="flex mb-4 items-center">
                    <div className='w-full'> 
                        {listTodos && listTodos.map((todo, index) => {
                           const isChecked = selectedTodos.includes(todo.id)
                           return (
                                <div className='flex mt-4 mr-2 px-2 w-full' key={index}>
                                    <Checkbox
                                        type="checkbox"
                                        value='true'
                                        checked={isChecked}
                                        onChange={(()=>checkBox({index, listTodos, selectedTodos, setSelectedTodos}))}
                                        />
                                    <div className={todo.done ? 'flex w-full line-through' : "flex w-full"}>
                                        {todo.task}
                                    </div>
                                    <div> 
                                       {todo.priority && <div className="text-red-500">Priority</div>}</div>
                                    </div>)
                                })}  
                                </div>
                    </div>
                    <Button onClick={(()=>handleComplete({selectedTodos, listTodos, setListTodos, setSelectedTodos}))} >Complete</Button>
                    <Button onClick={(()=>handleIncomplete({selectedTodos, listTodos, setListTodos, setSelectedTodos}))} >Incomplete</Button>
                    <Button onClick={(()=>deleteTodo({selectedTodos, listTodos, setListTodos}))} >Delete</Button>
                    <Button onClick={(()=>clearStorage(setListTodos))} >Delete All </Button>
               </div>
        </div>
    )
}