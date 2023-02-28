import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import './styles.scss';

const TodoList = ({ todoList, onTodoClick }) => {
    const handleTodoClick = (todo, idx) => {
        if(!onTodoClick) return;

        onTodoClick(todo, idx)
    }

    
    return <ul className="todo-list">
        {todoList.map((todo, idx) => (
            <li key={todo.id} 
            className={classnames({
                'todo-item': true,
                completed: todo.status === 'completed'
            })}

            onClick={() => handleTodoClick(todo, idx)}
                >{todo.title}</li>
        ))}
    </ul>;
}

TodoList.propTypes = {
    todoList: PropTypes.array,
};
TodoList.defaultProps = {
    todoList: [],
};

export default TodoList;
