
function handleTodo (todo, done){ 
    const newTodo = {...todo, done: !done}
    return newTodo
}

function deleteTodo (id, listTodos) {
    const newList = listTodos.filter(element => element.id !== id);
    return newList   
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


// export async function deleteTodo (id) {
//     try{
//         const deleteTodo = await fetchTodos(id)
//         await DataStore.delete(deleteTodo);
//             return true

//     } catch (error) {
//         console.log("error to Delete", error)
//         return false
//     }
// }

export { handleTodo, deleteTodo, todoNotDone, sortTodos }