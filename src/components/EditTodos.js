
export function checkBox ({index, listTodos, selectedTodos, setSelectedTodos}) {
    const todoId = listTodos[index].id
    const selectedTodo = [...selectedTodos]

    if (selectedTodo.includes(todoId)) {
        selectedTodo.splice(selectedTodo.indexOf(todoId), 1)
    } else {
        selectedTodo.push(todoId)
    }
    setSelectedTodos(selectedTodo)
};

export function handleTodo (todo, done){ 
    const newTodo = {...todo, done: !done}
    console.log('handleTodo', newTodo)
    return newTodo
}

export function handleIncomplete ({selectedTodos, listTodos,}) {
    const newListTodos = listTodos.map(todo => {
        if(selectedTodos.includes(todo.id)){
            return {...todo, done: false}
        }
        return todo
    });

   
};

export function deleteTodo ({selectedTodos, listTodos}) {
    if(!selectedTodos || selectedTodos.length === 0) return;

    const newList = listTodos.findIndex(element=> element.id === selectedTodos[0])
        if(newList !== -1){
            listTodos.splice(newList, 1)
            
        }   
       
};


  