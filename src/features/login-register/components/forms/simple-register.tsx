import { Anchor, Box, Button, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { NavLink } from 'react-router';

interface ISimpleRegisterFormValueProps {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SimpleRegisterForm = () => {
  const form = useForm({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      username: (value) =>
        value.trim().length < 3 ? 'Username must be at least 3 characters' : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'Invalid email',
      password: (value) =>
        value.trim().length < 6 ? 'Password must be at least 6 characters' : null,
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords do not match' : null,
    },
  });

  const handleSubmit = (values: ISimpleRegisterFormValueProps) => {
    console.log('Form submitted:', values);
  };

  return (
    <Box miw="340px" mx="auto">
      <Title order={2}>Create an account</Title>
      <Text mb={16} size='sm'>Fill the form below to register</Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Username"
          placeholder="Enter your username"
          {...form.getInputProps('username')}
        />

        <TextInput
          mt="sm"
          label="Email"
          placeholder="Enter your email"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          mt="sm"
          label="Password"
          placeholder="Enter your password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm Password"
          placeholder="Re-enter your password"
          {...form.getInputProps('confirmPassword')}
        />

        <Button type="submit" fullWidth mt="md">
          Register
        </Button>

        <Text size='sm' mt={16} ta="center">Already have an account? <Anchor component={NavLink} to='/app/login'>Login</Anchor></Text>
      </form>
    </Box>
  );
}

export default SimpleRegisterForm