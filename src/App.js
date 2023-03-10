import Header from 'components/Header';
import {
  ALBUM,
  CART,
  PRODUCT_DETAIL,
  PRODUCT_DETAIL_ADDITIONAL,
  PRODUCT_DETAIL_DESCRIPTION,
  PRODUCT_DETAIL_REVIEW,
  PRODUCT_LIST,
  TODO,
} from 'constants/route';
import ProductFeature from 'features/Product';
import DetailPage from 'features/Product/pages/DetailPage';
import CartFeature from 'features/ShoppingCart';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album/pages';
import TodoFeature from './features/Todo/pages';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductFeature />} />
        <Route path={TODO} element={<TodoFeature />} />
        <Route path={ALBUM} element={<AlbumFeature />} />
        <Route path={PRODUCT_LIST} element={<ProductFeature />} />
        <Route path={PRODUCT_DETAIL} element={<DetailPage />} />
        <Route path={PRODUCT_DETAIL_DESCRIPTION} element={<DetailPage />} />
        <Route path={PRODUCT_DETAIL_ADDITIONAL} element={<DetailPage />} />
        <Route path={PRODUCT_DETAIL_REVIEW} element={<DetailPage />} />
        <Route path={CART} element={<CartFeature />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
