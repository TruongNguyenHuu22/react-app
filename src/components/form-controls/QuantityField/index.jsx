import { FormControl, FormHelperText, Typography } from '@mui/material';
import QuantitySelector from 'components/QuantitySelector';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const QuantityField = (props) => {
  const { form, name, label, disabled } = props;
  const { formState, setValue } = form;

  const hasError = formState.errors[name];

  const handleDecrease = (name, value) => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1);
  const handleIncrease = (name, value) => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1);

  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <QuantitySelector
            {...{ onChange, onBlur, disabled, hasError, name, value }}
            decrease={() => handleDecrease(name, value)}
            increase={() => handleIncrease(name, value)}
          />
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
