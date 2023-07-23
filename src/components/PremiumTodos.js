import React, { useState, useEffect } from 'react';
import { View, Card, Heading, ScrollView, ButtonGroup } from '@aws-amplify/ui-react';
import { deleteTodo, todoDone, fetchTodos } from './EditPremium';
import { BsTrash3 } from 'react-icons/bs';
import { MdDone, MdOutlineCancel, MdOutlineAdd, MdOutlineModeEdit } from 'react-icons/md';
import TodoCreateForm from '../ui-components/TodoCreateForm';
import TodoUpdateForm from '../ui-components/TodoUpdateForm';
import { Button } from './Button'

export function PremiumTodos (){
    const [listTodos, setListTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    const [newTodo, setNewTodo] = useState(null);

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
                {newTodo && (
                    <TodoCreateForm
                        onSuccess={(()=>(setNewTodo(null)))}/>
                )}
                {editTodo && (
                    <TodoUpdateForm
                        id={editTodo.id}
                        todo={editTodo.task}
                        onSuccess={(()=>setEditTodo(null))}/>
                )}
                    <ScrollView height="500px" width="400px" maxWidth="100%"> 
                {listTodos.map((todo)=>(
                    <View boxShadow="2px 2px 3px 3px var(--amplify-colors-neutral-60)" margin="10px" border="1px solid"  borderRadius="6px"  
                        maxWidth="100%" color="var(--amplify-colors-gray-60)" padding="1rem"
                        key={todo.id}><div className={todo.done ? 'flex w-full line-through' : "flex w-full"}>
                    Task: {todo.task}</div> {todo.priority ? <View as="span"
                        color="var(--amplify-colors-red-60)"
                        >Priority</View> : ""}<div> Date: {new Date(todo.date).toLocaleDateString()} {/* Format Date to "MM/DD/YYYY" */}</div>
                        <ButtonGroup justifyContent='center'>
                            <MdDone onClick={()=>(todoDone(todo.id))}/>
                            <MdOutlineModeEdit onClick={()=>(setEditTodo(todo))}/>
                            <BsTrash3 onClick={()=>(deleteTodo(todo.id))}/>
                        </ButtonGroup>
                    </View> 
                ))}
                </ScrollView>
                <ButtonGroup justifyContent='center'>
                    <Button  onClick={(()=> (setNewTodo(true)))}><MdOutlineAdd/></Button>
                    <Button onClick={(()=> (setNewTodo(null)))}><MdOutlineCancel/></Button> 
                </ButtonGroup>
            </Card>  
        </div>
    )
}