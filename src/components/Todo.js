import { Button } from './Button';
import { handleTodo, deleteTodo, handlePriority } from '../helpers/editTodos';
import { IconDone, IconPriority, IconDelete, OpenIcon, CloseIcon } from "./svg";
import { format } from 'date-fns';

export function Todos({ listTodos }) {
    const list = [...listTodos]

    return (
        <div>
            {list.map((todo) => (
                <div key={todo.id}>
                    <div className={todo.done ? 'todo todo-done' : "todo todo-notDone"}>
                        <Button className="iconButton" onClick={(() => handleTodo(todo))} label={<IconDone color={todo.done ? 'green' : 'currentColor'}/>}/>
                        {!todo.done && <Button className="iconButton" onClick={(() => handlePriority(todo))} label={<IconPriority color={todo.priority ? 'orange' : 'currentColor'}/>}/>}
                        {todo.done && <Button className="iconButton" onClick={() => deleteTodo(todo.id)} label={<IconDelete color={'currentColor'}/>}/>}
                        <div>{todo.task} {todo.date && <span className="display-date"> {format(new Date(todo.date), 'dd MMM')}</span>}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function TodosDone(props) {
    const { showTodosDone, onClick, filterDoneTodos } = props
    return (
        <div className='listTodosDone' onClick={onClick}>Completed ({filterDoneTodos.length})
            {filterDoneTodos.length !== 0 ? <Button className="iconButton" label={showTodosDone ? <OpenIcon/> : <CloseIcon/>}/> : ""}
        </div>
    )
}
