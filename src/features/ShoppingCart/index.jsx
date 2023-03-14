import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';

CartFeature.propTypes = {};

function CartFeature(props) {
  const total = useSelector(cartTotalSelector);
  console.log('🚀 ~ file: index.jsx:10 ~ CartFeature ~ total:', total);

  const count = useSelector(cartItemsCountSelector);
  return (
    <div>
      Cart feature {total} -- {count}
    </div>
  );
}

export default CartFeature;
