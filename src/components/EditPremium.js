import { DataStore,} from "aws-amplify";
import { Todo } from '../models';

export async function fetchTodos () {
    try{
        const todos = await DataStore.query(Todo)

        return todos
    }catch(error){
        console.error('Error fetching todos:', error)

        return []
    }
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
