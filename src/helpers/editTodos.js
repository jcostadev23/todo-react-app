import { DataStore } from "aws-amplify";
import { Todo } from "../models";

function handleTodo (todo, done){ 
    const newTodo = {...todo, done: !done}
    return newTodo
}

async function deleteTodo (id) {
    const toDelete = await DataStore.query(Todo, id);
        if (toDelete) {
            DataStore.delete(toDelete);
        }
}

function todoNotDone (listTodos){
    const todosNotDone = listTodos.filter(todo => !todo.done);
    return todosNotDone
}

function sortTodos(listTodos){
    const list = [...listTodos]
    list.sort((a, b)=> a.done - b.done || b.priority - a.priority)
    return list
}

export { handleTodo, deleteTodo, todoNotDone, sortTodos }