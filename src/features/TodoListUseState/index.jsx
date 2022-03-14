import React, { useRef, useState } from 'react';
import './style.scss'

function TodoListState(props) {
    const textInput = useRef();
    const [work, setWork] = useState('');
    console.log(work);
    const [listWork, setListWork] = useState([]);
    const handleSubmit = () => {
        if (!work) return;
        setListWork(prev => {
            return [...prev, work]
        })
        setWork('');
        textInput.current.focus();
    }
    console.log(listWork);
    const handleDelete = (id) => {
        const newListWork = [...listWork];
        newListWork.splice(id, 1);
        setListWork(newListWork)
    }
    return (
        <div className='todo-list'>
            <h3>Todo List UseState</h3>
            <input
                placeholder='...'
                ref={textInput}
                value={work}
                onChange={(e) => setWork(e.target.value)}
            />
            <button
                onClick={() => handleSubmit()}
            >Thêm</button>
            <div>
                <ul>
                    {
                        listWork.map((item, ind) => (
                            <li key={ind}>{item}
                                <span className='btn-delete' onClick={() => handleDelete(ind)}>x</span></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default TodoListState;