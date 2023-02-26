import { NavLink, Route, Routes } from "react-router-dom";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/pages";

function App() {
    let activeClassName = "underline";
    return (
        <div className="App">
            Header
            <p>
                <NavLink
                    to="/todo"
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    Todo
                </NavLink>
            </p>
            <p>
                <NavLink
                    to="/albums"
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    Album
                </NavLink>
            </p>
            <Routes>
                <Route path="/todo" element={<TodoFeature />} />
                <Route path="/albums" element={<AlbumFeature />} />
            </Routes>
            Footer
        </div>
    );
}

export default App;
