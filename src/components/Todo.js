import { Done, Priority, Delete } from './Button';
import { ButtonGroup } from '@aws-amplify/ui-react';
import { handleTodo, deleteTodo} from '../helpers/editTodos';

export function Todo ({listTodos}){
    const list = [...listTodos]

    return(
        <div>
            {list.map((todo)=> (
                <div className='text-gray-700' key={todo.id}>
                    <div className={todo.done ? 'flex w-full text-gray-400' : "flex w-full text-gray-500"}>
                    Task: {todo.task}</div> {todo.priority ? <div as="span" color="var(--amplify-colors-red-60)">
                        Priority</div> : ""}<div> Date: {new Date(todo.date).toLocaleDateString()} {/* Format Date to "MM/DD/YYYY" */}</div>
                        <ButtonGroup justifyContent='center'>
                            <Done onClick={(()=> handleTodo(todo ,todo.done))}/>
                            <Priority onClick={(()=> console.log('it works'))}/>
                            <Delete onClick={()=> deleteTodo(todo.id, list)}/>
                        </ButtonGroup>
                    </div> 
                ))}
            </div>
    )
}