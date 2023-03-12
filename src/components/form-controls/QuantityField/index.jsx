import styled from '@emotion/styled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box, FormControl, FormHelperText, IconButton, OutlinedInput, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const QuantityBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  maxWidth: '200px',
}));

const QuantityField = (props) => {
  const { form, name, label, disabled } = props;
  const { formState, setValue } = form;

  const hasError = formState.errors[name];

  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <QuantityBox>
            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <OutlinedInput
              id={name}
              type="number"
              value={value}
              {...{ disabled, onChange, onBlur }}
              error={!!hasError}
            />
            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
              <AddCircleOutlineIcon />
            </IconButton>
          </QuantityBox>
        )}
      />
      <FormHelperText error={!!hasError}>{formState.errors[name]?.message}</FormHelperText>
    </FormControl>
  );
};

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default QuantityField;
