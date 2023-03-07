import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: propTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const actionLogin = login(values);
      const user = await dispatch(actionLogin).unwrap();

      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return <LoginForm onSubmit={handleSubmit} />;
}

export default Login;
