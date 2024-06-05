import React, { useEffect, useState } from 'react';
import TodoList from './TodoList.jsx';
import './Interview1.css';
import TodoItem from './TodoList.jsx';

function Interview1() {
    const [initialInput, setInitialInput] = useState('');
    const [todo, setTodo] = useState([]);


    const handleTodoUpload = ()=>{
        if(initialInput.length>=1){
            setTodo((prevState)=>[
                ...prevState,initialInput
            ])
        }
        setInitialInput('');
    }

    const handleKeyBind = (event)=>{
        if(event.key === 'Enter'){
            handleTodoUpload();
        }
    }

    const handleTodoRemoval = (indexToRemove)=>{
        setTodo((prevState) => prevState.filter((_, index) => index !== indexToRemove));
    }

    const handleTodoEdit = (newValue,index)=>{
        const cloneData = [...todo];
        cloneData[index] = newValue;
        setTodo(cloneData);
    }

   
    

    return (
        <>
            <div className="todo-container">
                <div className="todo-input">
                    <input
                        type="text"
                        value={initialInput}
                        onChange={(event)=> setInitialInput(event.target.value)}
                        onKeyDown={handleKeyBind}
                        autoFocus
                        placeholder='Enter your task here...'
                    />
                    <button onClick={handleTodoUpload} >Add task</button>
                </div>

                <div className="todo-body">
                        
                        
                {
                    todo.map((item,index)=>(
                            <TodoItem key={index} todoData={item} onUpdate={(newValue)=>handleTodoEdit(newValue,index)} onDelete={()=> handleTodoRemoval(index)} />
                    ))
                }                            
                        
                         
                </div>
            </div>
        </>
    );
}

export default Interview1;
