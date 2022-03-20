import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';
import TodoForm from '../TodoForm';
TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}
function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, indx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, indx);
    }

    const handleFormTodoSubmit = (values) => {
        console.log('Form submit: ', values)
    }
    return (
        <div>
            <h3>Todo Form</h3>
            <TodoForm onSubmit={handleFormTodoSubmit} />
            <ul className='todolist'>
                {
                    todoList.map((todo, indx) => (
                        <li key={todo.id}
                            className={classnames({
                                'todo-item': true,
                                completed: todo.status === 'done'
                            })}
                            onClick={() => handleTodoClick(todo, indx)}
                        >{todo.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;