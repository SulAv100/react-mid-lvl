import React, { useEffect, useState } from 'react';
import TodoList from './TodoList.jsx';
import './Interview1.css';
import TodoItem from './TodoList.jsx';

function Interview1() {

    const [initialValue, setInitialValue] = useState('');
    const [todoList, setTodoList] = useState([]);


    const uploadTodo = ()=>{
        if(initialValue.length>=1){
            setTodoList((prevState)=>[
                ...prevState, initialValue
            ])
        }
        setInitialValue('');
    }

    const keyBind = (event)=>{
        if(event.key == 'Enter'){
            uploadTodo();
        }
    }

    const deleteTodo = (indexToDelete)=>{
        setTodoList((prevState)=> prevState.filter((_,index)=> index !== indexToDelete ));
    }
    

    const handleTodoEdit = (newValue,index)=>{
        const copyData = [...todoList];
        copyData[index] = newValue;
        setTodoList(copyData);
    }


    
     
    

    return (
        <>
            <div className="todo-container">
                <div className="todo-input">
                    <input
                        type="text"
                        value={initialValue}
                        onChange={(event)=> setInitialValue(event.target.value)}
                        onKeyDown={keyBind}
                        autoFocus
                        placeholder='Enter your task here...'
                    />
                    <button onClick={uploadTodo} >Add task</button>
                </div>

                <div className="todo-body">
                        
                        {
                            todoList?.map((item,index)=>(
                                <TodoItem key={index} todo={item} onDelete={()=> deleteTodo(index)} onUpdate={(newData)=> handleTodoEdit(newData,index)} />
                            ))
                        }
                         
                </div>
            </div>
        </>
    );
}

export default Interview1;
