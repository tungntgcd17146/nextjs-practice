import { useState, useCallback } from 'react';

//mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

//components
import DarkLogo from '@/public/assets/DarkLogo.webp';
import LightLogo from '@/public/assets/LightLogo.webp';
import Button from '@/src/components/ui/Button';
import Link from 'next/link';
import HeaderContent from '../HeaderContent';
import Input from '@/src/components/ui/Input';

//utils
import Logo from '@/src/components/ui/Logo';
import { useMode } from '@/src/contexts/modeContext/useModeContext';
import { BASE_LOGIN_URL } from '@/src/constants/common';
import useScreenWidth from '@/src/hooks/useScreenWidth';

//utils
import { signup } from '@/src/lib/actions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '@/src/lib/validation';
import { fetchUserByEmail } from '@/src/services/userAuthService';
import { SignupFormInputs } from '@/src/types/forms';

export interface Props {
  setSnackbarMessage: React.Dispatch<React.SetStateAction<string>>;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupFields = ({ setSnackbarMessage, setOpenSnackbar }: Props) => {
  const theme = useTheme();
  const { isMobile } = useScreenWidth();
  const { isDarkMode } = useMode();

  const [submitLoading, setSubmitLoading] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignupFormInputs> = async (formData) => {
    const { email, password } = formData;
    setSubmitLoading(true);

    const { data: users } = await fetchUserByEmail({ email });

    const [user] = users;

    if (user) {
      setSnackbarMessage('Email already exists');
      setSubmitLoading(false);
      setOpenSnackbar(true);
      return;
    }

    if (isMatchedConfirmPassword) {
      try {
        await signup({ email, password });
        setSubmitLoading(false);
        setSnackbarMessage('Register user success');
        setOpenSnackbar(true);
        // Clear form fields on successful signup
        reset();
      } catch (error) {
        setSnackbarMessage('Register user failed');
        setSubmitLoading(false);
        setOpenSnackbar(true);
      }
    }
  };

  const handleChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  const handleChangeConfirmPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value);
    },
    [],
  );

  const logo = isDarkMode ? LightLogo : DarkLogo;

  const isMatchedConfirmPassword = password === confirmPassword;

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        padding: '24px',
        width: '100%',
      }}
      display="flex"
      justifyContent="center"
    >
      <Box sx={{ position: 'absolute', top: '24px', left: '24px' }}>
        <Logo logoImage={logo} alt="logo" />
      </Box>
      <Typography
        sx={{ position: 'absolute', top: '40px', right: '40px' }}
        variant="caption"
      >
        Already a member?{' '}
        <Link
          style={{
            color: theme.palette.text.secondary,
            textDecoration: 'none',
            fontWeight: 700,
          }}
          href={BASE_LOGIN_URL}
        >
          Sign in
        </Link>
      </Typography>
      <Grid
        container
        sx={{
          height: '100vh',
          width: isMobile ? '100%' : '350px',
          marginTop: isMobile ? '270px' : '370px',
        }}
        display="flex"
        flexDirection="column"
      >
        <Typography
          sx={{ marginBottom: '32px', color: theme.palette.text.secondary }}
          variant="h2"
        >
          Sign up
        </Typography>

        {/* Header */}
        <HeaderContent />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            startIcon={<EmailIcon />}
            containerStyles={{ marginBottom: '12px' }}
            startIconStyles={{ color: theme.palette.text.primary }}
            sx={{ marginLeft: '12px' }}
            placeholder="Your email"
            type="email"
            inputProps={{ ...register('email') }}
          />
          {errors.email && (
            <Typography sx={{ color: 'red', marginBottom: '12px' }}>
              {errors.email.message}
            </Typography>
          )}

          <Input
            startIcon={<LockIcon />}
            type="password"
            containerStyles={{ marginBottom: '12px' }}
            startIconStyles={{ color: theme.palette.text.primary }}
            sx={{ marginLeft: '12px' }}
            placeholder="Your password"
            inputProps={{ ...register('password') }}
            onChange={handleChangePassword}
          />
          {errors.password && (
            <Typography sx={{ color: 'red', marginBottom: '12px' }}>
              {errors.password.message}
            </Typography>
          )}

          <Input
            startIcon={<LockIcon />}
            type="password"
            containerStyles={{ marginBottom: '12px' }}
            startIconStyles={{ color: theme.palette.text.primary }}
            sx={{ marginLeft: '12px' }}
            placeholder="Confirm your password"
            onChange={handleChangeConfirmPassword}
          />
          {!isMatchedConfirmPassword && (
            <Typography sx={{ color: 'red', marginBottom: '12px' }}>
              Password and confirm password must match
            </Typography>
          )}

          <Button
            sx={{ marginBottom: '32px', width: '100%' }}
            aria-label="apply-button"
            children={submitLoading ? 'Loading...' : 'Continue'}
            color="primary"
            type="submit"
            disabled={submitLoading || !isMatchedConfirmPassword}
          />

          <Typography sx={{ marginBottom: '32px' }} variant="body1">
            This site is protected by reCAPTCHA and the Google Privacy Policy.
          </Typography>
        </form>
      </Grid>
    </Box>
  );
};

export default SignupFields;
