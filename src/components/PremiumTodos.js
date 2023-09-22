import React, { useState, useEffect } from 'react';
import { filterTodosDone, sortTodos } from '../helpers/editTodos';
import { TodosInput } from './TodoInput';
import { Todos, TodosDone } from './Todo';
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';
import '../styles.css';
import "./todos.css";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { LoginAdvantages, SignoutMessage } from './information';

export function PremiumTodos() {
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    const [listTodos, setListTodos] = useState([]);
    const [showTodosDone, setShowTodosDone] = useState(null);
    useEffect(() => {
        DataStore.observeQuery(Todo).subscribe(msg => {
            setListTodos(msg.items);
        });
    }, []);

    const displayTodosDone = () => {
        setShowTodosDone(!showTodosDone)
    }

    const sortedTodos = sortTodos(listTodos.filter((todo) => !todo.done))
    const filterDoneTodos = filterTodosDone(listTodos)

    return (
        <div className='card'>
            <div className='header'>Todoco</div>
            <TodosInput listTodos={listTodos} />
            <Todos listTodos={sortedTodos} />
            <TodosDone onClick={displayTodosDone} showTodosDone={showTodosDone} filterDoneTodos={filterDoneTodos} />
            {showTodosDone && <Todos listTodos={filterDoneTodos} />}
            <div>
                {user && <SignoutMessage signOut={signOut} />}
                {!user && <LoginAdvantages />}
            </div>
        </div>
    )
}