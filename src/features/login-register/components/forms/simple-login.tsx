import { Anchor, Box, Button, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { NavLink, useNavigate } from 'react-router';

interface ISimpleLoginFormValueProps {
  username: string;
  password: string;
}

const SimpleLoginForm = () => {
  const navigate = useNavigate()
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (value) => (value.trim().length < 3 ? 'Username is required' : null),
      password: (value) => (value.trim().length === 0 ? 'Password is required' : null),
    },
  });

  const handleSubmit = (values: ISimpleLoginFormValueProps) => {
    notifications.show({
      title: 'Login Success',
      message: 'Welcome back!',
      autoClose: 3000
    })
    console.log('Form submitted:', values);
    navigate('/home')
  };

  return (
    <Box miw="340px" mx="auto">
      <Title order={2}>Welcome back!</Title>
      <Text mb={16} size='sm'>Enter your username and password</Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Username"
          placeholder="Enter your username"
          {...form.getInputProps('username')}
        />

        <PasswordInput
          mt="sm"
          label="Password"
          placeholder="Enter your password"
          {...form.getInputProps('password')}
        />

        <Button type="submit" fullWidth mt="md">
          Login
        </Button>

        <Text size='sm' mt={16} ta="center">Don't have an account? <Anchor component={NavLink} to='/register'>Register Now</Anchor></Text>
      </form>
    </Box>
  );
}

export default SimpleLoginForm