import { ButtonDone, ButtonPriority, ButtonDelete, ShowTodosDone } from './Button';
import { handleTodo, deleteTodo, handlePriority } from '../helpers/editTodos';
import './todos.css';
import { format } from 'date-fns';

export function Todos({ listTodos }) {
    const list = [...listTodos]

    return (
        <div>
            {list.map((todo) => (
                <div key={todo.id}>
                    <div className={todo.done ? 'todo todo-done' : "todo todo-notDone"}>
                        <ButtonDone color={todo.done ? 'green' : 'currentColor'} onClick={(() => handleTodo(todo))} />
                        {!todo.done && <ButtonPriority color={todo.priority ? 'orange' : 'currentColor'} onClick={(() => handlePriority(todo))} />}
                        {todo.done && <ButtonDelete color={'currentColor'} onClick={() => deleteTodo(todo.id)} />}
                        <div>{todo.task} {todo.date && <span className="display-date"> {format(new Date(todo.date), 'dd MMM')}</span>}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function TodosDone(props) {
    const { showTodosDone, onClick, todosDone } = props
    return (
        <div className='listTodosDone' onClick={onClick}>Completed ({todosDone.length})
            {todosDone.length !== 0 ? <ShowTodosDone showTodosDone={showTodosDone}
                onClick={onClick} /> : ""}
        </div>
    )
}
