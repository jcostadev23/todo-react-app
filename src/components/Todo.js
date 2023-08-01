import { ButtonDone, ButtonPriority, ButtonDelete } from './Button';
import { handleTodo, deleteTodo} from '../helpers/editTodos';

export function Todo ({listTodos}){
    const list = [...listTodos]

    return(
        <div>
            {list.map((todo)=> (
                <div className='text-gray-700' key={todo.id}>
                    <div className={todo.done ? 'flex w-full text-gray-400' : "flex w-full text-gray-500"}>
                        <ButtonDone style={todo.done ? {color:'green'} : {color:'currentColor'}} onClick={(()=> handleTodo(todo ,todo.done))}/>
                        <ButtonPriority style={todo.priority ? {color:'orange'} : {color:'currentColor'}} onClick={(()=> console.log('it works'))}/>
                    Task: {todo.task}</div> 
                     <div className='flex w-full text-gray-500'> 
                     Date: {new Date(todo.date).toLocaleDateString()} {/* Format Date to "MM/DD/YYYY" */}
                    </div>  
                    <ButtonDelete onClick={()=> deleteTodo(todo.id, list)}/>  
                    </div> 
                ))}
            </div>
    )
}