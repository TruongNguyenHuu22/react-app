import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
  closeDialog: propTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      //auto set username = email

      values.username = values.email;

      const actionRegister = register(values);
      const user = await dispatch(actionRegister).unwrap();

      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar('Register successfully!!!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
