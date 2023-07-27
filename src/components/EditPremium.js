import { DataStore } from "aws-amplify";
import { Todo } from '../models';

export async function fetchTodos (id) {
    if(!id){
        console.log('fetchTodos')
        return await DataStore.query(Todo)
    };
    console.log('fetchTodos2 return ')
    return await DataStore.query(Todo, id)
};

export async function deleteTodo (id) {
    try{
        const deleteTodo = await fetchTodos(id)
        await DataStore.delete(deleteTodo);
            return true

    } catch (error) {
        console.log("error to Delete", error)
        return false
    }
}

export async function todoDone (id) {
    try{
        const todoDone = await fetchTodos(id)
    
        const updateTodo = Todo.copyOf(todoDone, (todo) => {
            todo.done = true;
          });
        await DataStore.save(updateTodo)
        
        return true
    }catch (error){
        console.log('Error updating todo.done', error)
        return false
    }
}