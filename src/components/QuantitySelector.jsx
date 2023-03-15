import styled from '@emotion/styled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box, IconButton, OutlinedInput } from '@mui/material';

QuantitySelector.propTypes = {};

const QuantityBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  maxWidth: '200px',
}));

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
