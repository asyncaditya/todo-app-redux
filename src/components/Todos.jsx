import { useSelector } from 'react-redux';
import Todo from './Todo';

function Todos() {
    const { todos } = useSelector((state) => state.todo);

    return (
        <div className="todos">
            {
                todos.map(todo => {
                    return <Todo item={todo} />
                })
            }
        </div>
    )
}

export default Todos;