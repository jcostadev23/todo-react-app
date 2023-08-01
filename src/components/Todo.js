import { ButtonDone, ButtonPriority, ButtonDelete } from './Button';
import { handleTodo, deleteTodo} from '../helpers/editTodos';

export function Todos ({listTodos}){
    const list = [...listTodos]

    return(
        <div>
            {list.map((todo)=> (
                <div className='text-gray-700' key={todo.id}>
                    <div className={todo.done ? 'flex w-full text-gray-400' : "flex w-full text-gray-500"}>
                        <ButtonDone color={todo.done ? 'green' : 'currentColor'} onClick={(()=> handleTodo(todo ,todo.done))}/>
                        <ButtonPriority color={todo.priority ? 'orange' : 'currentColor'} onClick={(()=> console.log('it works'))}/>
                    Task: {todo.task}</div> 
                     <div className='flex w-full text-gray-500'> 
                     Date: {new Date(todo.date).toLocaleDateString()} {/* Format Date to "MM/DD/YYYY" */}
                    </div>  
                    <ButtonDelete onClick={()=> deleteTodo(todo.id)}/>  
                    </div> 
                ))}
            </div>
    )
}