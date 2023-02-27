import queryString from "query-string";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import TodoList from "../components/TodoList";

const TodoFeature = (props) => {
    const initTodoList = [
        { id: 1, title: "Eat", status: "new" },
        { id: 2, title: "Sleep", status: "completed" },
        { id: 3, title: "Code", status: "new" },
    ];
    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    const status = searchParams.get("status");

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || "all";
    });

    useEffect(() => {
        setFilterStatus(status || "all");
    }, [status]);
    const handleTodoClick = (todo, idx) => {
        //clone current array to new one
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === "new" ? "completed" : "new",
        };
        setTodoList(newTodoList);
    };

    const handleShowAll = () => {
        setSearchParams({ status: "all" });
    };
    const handleShowCompleted = () => {
        setSearchParams({ status: "completed" });
    };
    const handleShowNew = () => {
        setSearchParams({ status: 'new' });
    };

    const renderedTodoList = useMemo(
        () =>
            todoList.filter(
                (todo) => filterStatus === "all" || filterStatus === todo.status
            ),
        [filterStatus, todoList]
    );

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList
                todoList={renderedTodoList}
                onTodoClick={handleTodoClick}
            />
            <button onClick={handleShowAll}>Show All</button>
            <button onClick={handleShowCompleted}>Show completed</button>
            <button onClick={handleShowNew}>Show new</button>
        </div>
    );
};

export default TodoFeature;
