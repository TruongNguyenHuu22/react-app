import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'components/form-controls/InputField';
import { Avatar, Button, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import PasswordField from 'components/form-controls/PasswordField';

const Content = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(4),
}));

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  margin: '0 auto',
  backgroundColor: theme.palette.secondary.main,
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(2, 0, 4, 0),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2, 0),
}));

const RegisterForm = (props) => {
  const { onSubmit } = props;

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required()
      .test('should has at least 2 words', 'Please enter at least 2 words', (value) => {
        return value.split(' ').length >= 2;
      })
      .label('Full name'),
    email: yup.string().email().required().label('Email'),
    password: yup.string().required().label('Password').min(6, 'Please enter at least 6 characters'),
    retypePassword: yup
      .string()
      .required()
      .label('Retype Password')
      .oneOf([yup.ref('password')], 'Password does not match'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    if (!onSubmit) return;

    onSubmit(values);

    form.reset();
  };

  return (
    <Content>
      <CustomAvatar>
        <LockOutlinedIcon />
      </CustomAvatar>
      <Title component="h1" variant="h5">
        Create an account
      </Title>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />
        <SubmitButton type="submit" variant="contained" color="primary" fullWidth>
          Create an account
        </SubmitButton>
      </form>
    </Content>
  );
};

RegisterForm.propTypes = {
  onsubmit: PropTypes.func,
};

export default RegisterForm;
