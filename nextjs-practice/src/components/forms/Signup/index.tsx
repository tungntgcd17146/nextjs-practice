'use client';

import { memo, useState, useCallback } from 'react';
//mui
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

//components
import SideBar from '@/src/components/forms/Signup/SideBar';
import SignupFields from './SignupFields';

//utils
import useScreenWidth from '@/src/hooks/useScreenWidth';
import { signup } from '@/src/lib/actions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '@/src/lib/validation';
import { fetchUserByEmail } from '@/src/services/userAuthService';
import { SignupFormInputs } from '@/src/types/forms';

export interface Props {}

const Signup = () => {
  const { isMobile } = useScreenWidth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  //snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signInSchema),
  });

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const snackbarAction = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="primary"
        onClick={handleClose}
      >
        <CloseIcon data-testid="Close_Icon" fontSize="small" />
      </IconButton>
    </>
  );

  const isMatchedConfirmPassword = password === confirmPassword;

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

  return (
    <Box display="flex" flexDirection="row">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackbarMessage}
        action={snackbarAction}
      />
      {/*Sign Up Side bar */}
      {!isMobile && <SideBar />}

      {/* Content */}
      <SignupFields
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        submitLoading={submitLoading}
        isMatchedConfirmPassword={isMatchedConfirmPassword}
        onChangePassword={handleChangePassword}
        onChangeConfirmPassword={handleChangeConfirmPassword}
      />
    </Box>
  );
};

export default memo(Signup);
