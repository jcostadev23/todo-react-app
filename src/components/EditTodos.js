
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

export function handleComplete ({selectedTodos, listTodos, setListTodos, setSelectedTodos}) {
    const newListTodos = listTodos.map(todo => {
        if(selectedTodos.includes(todo.id)){
            setSelectedTodos([])
            return {...todo, done: true}
        }
        return todo
    });
     
    localStorageUpdate(newListTodos, setListTodos)
};

export function handleIncomplete ({selectedTodos, listTodos, setListTodos, setSelectedTodos}) {
    const newListTodos = listTodos.map(todo => {
        if(selectedTodos.includes(todo.id)){
            setSelectedTodos([])
            return {...todo, done: false}
        }
        return todo
    });

    localStorageUpdate(newListTodos, setListTodos)
};

export function deleteTodo ({selectedTodos, listTodos, setListTodos}) {
    if(!selectedTodos || selectedTodos.length === 0) return;

    const newList = listTodos.findIndex(element=> element.id === selectedTodos[0])
        if(newList !== -1){
            listTodos.splice(newList, 1)
            localStorageUpdate(listTodos, setListTodos)
        }   
    setListTodos(JSON.parse(localStorage.getItem(('listTodos') || '[]')))        
};

export function clearStorage (setListTodos){
    localStorage.clear()
        setListTodos([])
}

function localStorageUpdate(newListTodos, setListTodos) {
    localStorage.setItem('listTodos', JSON.stringify(newListTodos))
    setListTodos(newListTodos)
  }
  