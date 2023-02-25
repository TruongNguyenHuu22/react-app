import React, { useState } from 'react';
import TodoList from '../components/TodoList';

const TodoFeature = (props) => {
    const initTodoList = [
        {id : 1, title : "Eat", status: 'new'},
        {id : 2, title : "Sleep", status: 'completed'},
        {id : 3, title : "Code", status: 'new'},
    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        //clone current array to new one
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status : newTodoList[idx].status === 'new' ? 'completed': 'new',
        }
        setTodoList(newTodoList);
    }

    const handleShowAll = () => {
        setFilterStatus('all');
    }
    const handleShowCompleted = () => {
        setFilterStatus('completed');
    }
    const handleShowNew = () => {
        setFilterStatus('new');
    }

    const renderedTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus ===todo.status )

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}/>
            <button onClick={handleShowAll}>Show All</button>
            <button onClick={handleShowCompleted}>Show completed</button>
            <button onClick={handleShowNew}>Show new</button>
        </div>
    );
};

export default TodoFeature;