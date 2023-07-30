
export function handleTodo (todo, done){ 
    const newTodo = {...todo, done: !done}
    return newTodo
}


export function deleteTodo ({selectedTodos, listTodos}) {
    if(!selectedTodos || selectedTodos.length === 0) return;

    const newList = listTodos.findIndex(element=> element.id === selectedTodos[0])
        if(newList !== -1){
            listTodos.splice(newList, 1)
            
        }   
       
};



  