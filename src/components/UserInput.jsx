import { useState } from "react";
import { addTodo } from "../redux/todoSlice";
import { useDispatch } from 'react-redux';

function UserInput() {
    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addTodo(todo));
        setTodo("");
    }

    return (
        <div className="userInput">
            <input value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default UserInput;