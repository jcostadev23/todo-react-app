import { DataStore } from "aws-amplify";
import { Todo } from "../models";

async function handleTodo (todo){ 
    const updateTodo = await DataStore.query(Todo, todo.id);
    if (updateTodo) {
        await DataStore.save(
            Todo.copyOf(updateTodo, update => {
                update.done = !update.done;
        })
       )
    }
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
    list.sort((a, b)=> b.priority - a.priority)
    return list
}

export { handleTodo, deleteTodo, todoNotDone, sortTodos }