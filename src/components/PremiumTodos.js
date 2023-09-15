import React, { useState, useEffect } from 'react';
import { filterTodosDone, sortTodosWithPriority } from '../helpers/editTodos';
import { TodosInput } from './TodoInput';
import { Todos, TodosDone } from './Todo';
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';
import { Button } from './Button';
import '../styles.css';
import { Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

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

    const sortedTodos = sortTodosWithPriority(listTodos.filter((todo) => !todo.done))
    const filterDoneTodos = filterTodosDone(listTodos)

    return (
        <div className='card'>
            <div className='header'>Todoco</div>
            <TodosInput listTodos={listTodos} />
            <Todos listTodos={sortedTodos} />
            <TodosDone onClick={displayTodosDone} showTodosDone={showTodosDone} filterDoneTodos={filterDoneTodos} />
            {showTodosDone && <Todos listTodos={filterDoneTodos} />}
            <div>
                {user && <div>
                    <Button
                        onClick={async () => {
                            await DataStore.clear();
                            signOut();
                        }}
                        label='Sign out' />
                </div>
                }

                {!user &&
                    <div>
                        <h2>
                            Want to save your todocos online?
                        </h2>
                        <p>
                            Saving your tocodos online makes it possible to access them from
                            anywhere with any device.
                        </p>
                        <Link to="/login"><Button label='SignIn' /></Link>
                    </div>
                }
            </div>
        </div>
    )
}