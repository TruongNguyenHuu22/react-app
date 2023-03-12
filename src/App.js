import Header from 'components/Header';
import { PRODUCT_DETAIL, PRODUCT_LIST } from 'constants/route';
import ProductFeature from 'features/Product';
import DetailPage from 'features/Product/pages/DetailPage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album/pages';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo/pages';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CounterFeature />} />
        <Route path="/todo" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path={PRODUCT_LIST} element={<ProductFeature />} />
        <Route path={PRODUCT_DETAIL} element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
