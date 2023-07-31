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