import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
  const handleSubmit = (values) => {
    console.log('submit form: ', values);
  };
  return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
