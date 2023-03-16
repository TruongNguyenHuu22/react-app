import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton, OutlinedInput } from '@mui/material';
import { QuantityBox } from 'features/Product/components/StyledComponent/Commons';

QuantitySelector.propTypes = {};

function QuantitySelector(props) {
  const { increase, decrease, onChange, onBlur, disabled, hasError, name, value } = props;
  return (
    <QuantityBox>
      <IconButton onClick={decrease}>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <OutlinedInput id={name} type="number" value={value} {...{ disabled, onChange, onBlur }} error={!!hasError} />
      <IconButton onClick={increase}>
        <AddCircleOutlineIcon />
      </IconButton>
    </QuantityBox>
  );
}

export default QuantitySelector;
