import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
  const { form, name, label, disabled } = props;
  const { formState } = form;

  const hasError = formState.errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          {...{ value, label, disabled }}
          fullWidth
          error={!!hasError}
          helperText={formState.errors[name]?.message}
        />
      )}
    />
  );
};

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
