import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { OutlinedInput } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { QuantityBox } from 'features/Product/components/StyledComponent/Commons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../cartSlice';

const CartItemQuantity = ({ item = {} }) => {
  const [value, setValue] = useState(item.quantity);
  const dispatch = useDispatch();
  const decrease = () => {
    const newQuantity = value - 1;
    if (newQuantity === 0) return;
    setValue((value) => value - 1);
    updateCartItem(newQuantity);
  };

  const increase = () => {
    const newQuantity = value + 1;
    setValue((value) => value + 1);
    updateCartItem(newQuantity);
  };

  const handleChange = (e) => {
    if (!e.target.value) {
      setValue(1);
    }
    const newQuantity = Number.parseInt(e.target.value);
    setValue(newQuantity);
    updateCartItem(newQuantity);
  };

  const updateCartItem = (newQuantity) => {
    dispatch(
      setQuantity({
        id: item.id,
        quantity: newQuantity,
      })
    );
  };

  return (
    <QuantityBox>
      <IconButton onClick={decrease}>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <OutlinedInput type="number" value={value} onChange={handleChange} disabled />
      <IconButton onClick={increase}>
        <AddCircleOutlineIcon />
      </IconButton>
    </QuantityBox>
  );
};

CartItemQuantity.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItemQuantity;
