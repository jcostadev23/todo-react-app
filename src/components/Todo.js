import { ButtonDone, ButtonPriority, ButtonDelete } from './Button';
import { handleTodo, deleteTodo} from '../helpers/editTodos';
import '../styles.css';

export function Todos ({listTodos}){
    const list = [...listTodos]

    return(
        <div>
            {list.map((todo)=> (
                <div key={todo.id}>
                    <div className={todo.done ? 'todo todo-done' : "todo todo-notDone"}>
                        <ButtonDone color={todo.done ? 'green' : 'currentColor'} onClick={(()=> handleTodo(todo))}/>
                        <ButtonPriority color={todo.priority ? 'orange' : 'currentColor'}/>
                        {todo.done && <ButtonDelete color={'currentColor'} onClick={()=> deleteTodo(todo.id)}/>}
                        Task: {todo.task}
                        <span className='date'>{new Date(todo.date).toLocaleDateString()} {/* Format Date to "MM/DD/YYYY" */}</span>
                    </div> 
                </div>  
            ))}
        </div>
    )
}