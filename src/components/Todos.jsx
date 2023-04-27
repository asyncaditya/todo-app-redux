import { useSelector } from 'react-redux';
import Todo from './Todo';

function Todos() {
    const { todos } = useSelector((state) => state.todo);

    return (
        <div className="todos">
            {
                todos.map((todo,index) => {
                    return <Todo item={todo} todoIndex={index} />
                })
            }
        </div>
    )
}

export default Todos;