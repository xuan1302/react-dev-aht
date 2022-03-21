import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';

function ListPage(props) {
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
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(inittodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const param = queryString.parse(location.search)
        return param.status || 'all';
    });

    useEffect(() => {
        const param = queryString.parse(location.search)
        setFilteredStatus(param.status || 'all')
    }, [location.search])

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
        const queryParam = { status: 'all' }
        history.push(
            {
                pathname: match.path,
                search: queryString.stringify(queryParam),
            }
        )
    }
    const handleShowCompleted = () => {
        const queryParam = { status: 'done' }
        history.push(
            {
                pathname: match.path,
                search: queryString.stringify(queryParam),
            }
        )
    }
    const handleShowNew = () => {
        const queryParam = { status: 'new' }
        history.push(
            {
                pathname: match.path,
                search: queryString.stringify(queryParam),
            }
        )
    }
    const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    // console.log(renderTodoList);
    const handleFormTodoSubmit = (values) => {
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',
        }
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList)
    }
    return (
        <div>
            <h3>Todo Form</h3>
            <TodoForm onSubmit={handleFormTodoSubmit} />
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

export default ListPage;