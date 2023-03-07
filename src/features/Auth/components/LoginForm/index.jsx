import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'components/form-controls/InputField';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import PasswordField from 'components/form-controls/PasswordField';

const Content = styled('div')(({ theme }) => ({
  position: 'relative',
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

const Progress = styled(LinearProgress)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  left: 0,
  right: 0,
}));

const LoginForm = (props) => {
  const { onSubmit } = props;

  const schema = yup.object().shape({
    identifier: yup.string().email().required().label('Email'),
    password: yup.string().required().label('Password'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (!onSubmit) return;

    await onSubmit(values);
  };

  const { isSubmitting } = form.formState;

  return (
    <Content>
      {isSubmitting && <Progress />}
      <CustomAvatar>
        <LockOutlinedIcon />
      </CustomAvatar>
      <Title component="h1" variant="h5">
        Sign in
      </Title>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="identifier" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <SubmitButton type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting} size="large">
          Sign in
        </SubmitButton>
      </form>
    </Content>
  );
};

LoginForm.propTypes = {
  onsubmit: PropTypes.func,
};

export default LoginForm;
