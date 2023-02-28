import { NavLink, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album/pages';
import TodoFeature from './features/Todo/pages';

const App = () => {
  let activeClassName = 'underline';
  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todo" className={({ isActive }) => (isActive ? activeClassName : undefined)}>
          Todo
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" className={({ isActive }) => (isActive ? activeClassName : undefined)}>
          Album
        </NavLink>
      </p>
      <Routes>
        <Route path="/" element={<TodoFeature />} />
        <Route path="/todo" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      Footer
    </div>
  );
};

export default App;
