import deleteImg from '../assets/delete.png';
import editImg from '../assets/edit.png';

import { deleteTodo, saveEditIndex } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';


function Todo({ item, todoIndex }) {

    const dispatch = useDispatch();

    return <div className='todo'>
        <div>
            {item}
        </div>
        <div className="buttons">
            <img src={deleteImg} alt="delete" onClick={() => dispatch(deleteTodo(todoIndex))} />
            <img src={editImg} alt="edit" onClick={() => dispatch(saveEditIndex(todoIndex))} />
        </div>
    </div>
}

export default Todo;