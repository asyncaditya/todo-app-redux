import UserInput from "./components/UserInput";
import Todos from "./components/Todos";
import './App.css';
import { useEffect, useState } from "react";

import { useSelector,useDispatch } from "react-redux";

import { saveEditIndex,editMyTodo } from "./redux/todoSlice";

function App() {
    const data = useSelector(state => state.todo);

    const [editTodo,setEditTodo]=useState("");

    useEffect(()=>{
        setEditTodo(data.todos[data.currentEditIndex])
    },[data.currentEditIndex])

    let classN = "";
    if (data.currentEditIndex === false) classN = "none";
    else classN = "flex";

    const dispatch = useDispatch();

    const handleClose=()=>{
        dispatch(editMyTodo(editTodo));
    }

    console.log(data)

    return (
        <div className="App">
            <UserInput />
            <Todos />
            <div className={`popup ${classN}`}>
                <div>
                    <input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/>
                    <button onClick={handleClose}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default App;