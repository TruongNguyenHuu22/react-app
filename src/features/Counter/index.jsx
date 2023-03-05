import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  };

  const handleDecrease = () => {
    dispatch(decrement());
  };

  return (
    <div>
      count: {counter}
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
