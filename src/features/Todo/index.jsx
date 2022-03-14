import React, { useState } from 'react';

import TodoList from './components/TodoList';

function TotoFeature(props) {
    const inittodoList = [
        {
            id: 1,
            title: "Title 1",
            status: 'done',
        },
        {
            id: 2,
            title: "Title 2",
            status: 'new',
        },
        {
            id: 3,
            title: "Title 3",
            status: 'new',
        },
    ]
    const [todoList, setTodoList] = useState(inittodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');
    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'done' : 'new',
        }
        newTodoList[idx] = newTodo;
        setTodoList(newTodoList);
    }
    const handleShowAll = () => {
        setFilteredStatus('all');
    }
    const handleShowCompleted = () => {
        setFilteredStatus('done');
    }
    const handleShowNew = () => {
        setFilteredStatus('new');
    }
    const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    // console.log(renderTodoList);
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAll}>Show all</button>
                <button onClick={handleShowCompleted}>Show completed</button>
                <button onClick={handleShowNew}>Show new</button>
            </div>
        </div>
    );
}

export default TotoFeature;