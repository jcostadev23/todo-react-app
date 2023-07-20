import React, { useState, useEffect} from 'react';
import Todos from './Todo.logic';
import {View, Card, Heading, ScrollView, ButtonGroup } from '@aws-amplify/ui-react';
import { deleteTodo, todoDone, fetchTodos } from './EditPremium';
import { BsTrash3 } from 'react-icons/bs';
import { FcApproval } from 'react-icons/fc';


export function PremiumTodos (){
    const [listTodos, setListTodos] = useState([]);
    const [premium, setPremium] = useState(false)

    useEffect(() => {
        fetchTodos()
         .then(todosFromDB => {
            setListTodos(todosFromDB);
         })
      }, [listTodos]);

    listTodos && listTodos.sort((a, b)=> a.done - b.done || b.priority - a.priority)

    return (
        <div className="flex justify-center ">
        <Card variation="elevated">
            <Heading level={3} color="gray" fontWeight="bold">Premium</Heading> 
            <Todos
                listTodos={listTodos}
                setListTodos={setListTodos}
                premium={premium}/> 
                <ScrollView height="300px" width="400px" maxWidth="100%"> 
            {listTodos.map((todo)=>(
                <View boxShadow="2px 2px 3px 3px var(--amplify-colors-neutral-60)" margin="8px" border="1px solid"  borderRadius="6px"  
                    maxWidth="100%" color="var(--amplify-colors-gray-60)" padding="1rem"
                    key={todo.id}><div className={todo.done ? 'flex w-full line-through' : "flex w-full"}>
                   Task: {todo.task}</div> {todo.priority ? <View as="span"
                    color="var(--amplify-colors-red-60)"
                    >Priority</View> : ""}<div> Date: {new Date(todo.date).toLocaleDateString()} {/* Format Date to "MM/DD/YYYY" */}</div>
                    <ButtonGroup justifyContent='center'>
                        <FcApproval onClick={()=>(todoDone(todo.id))}/>
                        <BsTrash3 onClick={()=>(deleteTodo(todo.id))}/>
                    </ButtonGroup>
                    
                </View>
            ))}
            </ScrollView>
    </Card>
</div>
    )
}