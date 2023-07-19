import React, { useState, useEffect} from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../models';
import Todos from './Todo.logic';
import {View, Grid, Card, Heading, ScrollView } from '@aws-amplify/ui-react';

export function PremiumTodos (){
    const [listTodos, setListTodos] = useState([]);
    const [premium, setPremium] = useState(false)

    useEffect(() => {
        fetchTodos();
      }, []);

    async function fetchTodos() {
        try {
        const todoFiles = await DataStore.query(Todo);
        setListTodos(todoFiles)
        return todoFiles;
        } catch (error) {
        console.log('Error fetching todos:', error);
        return [];
        }
    }

    return (
        <Grid className="h-100 w-full flex p-2 bg-teal-lightest font-sans">
            <div class="flex justify-center ">
                <Card className="bg-white rounded shadow p-4 w-full lg:w-3/4 lg:max-w-lg">
                    <Heading level={3} color="gray" fontWeight="bold">Premium</Heading> 
                    <Todos
                        listTodos={listTodos}
                        setListTodos={setListTodos}
                        premium={premium}/> 
                        <ScrollView height="300px" width="400px" maxWidth="100%"> 
                    {listTodos.map((todo)=>(
                        <View boxShadow="2px 2px 3px 3px var(--amplify-colors-neutral-60)" margin="8px" border="1px solid"  borderRadius="6px" ariaLabel="View example" 
                            maxWidth="100%" color="var(--amplify-colors-gray-60)" padding="1rem" width="20rem" 
                            key={todo.id}> Task: {todo.task} {!todo.done ? <div>Not Done</div> : ""} {todo.priority ? <View as="span"
                            color="var(--amplify-colors-red-60)"
                            >Priority</View> : ""} Date: {new Date(todo.date).toLocaleDateString()} {/* Format Date to "MM/DD/YYYY" */}
                        </View>
                    ))}
                    </ScrollView>
            </Card>
        </div>
        </Grid>
    )
}