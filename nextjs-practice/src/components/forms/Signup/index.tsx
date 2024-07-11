'use client';

import { memo, useState } from 'react';
//mui
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

//components
import SideBar from '@/src/components/forms/Signup/SideBar';
import SignupFields from './SignupFields';

export interface Props {}

const Signup = () => {
  //snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleClose = () => {
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
      {<SideBar />}

      {/* Content */}
      <SignupFields
        setSnackbarMessage={setSnackbarMessage}
        setOpenSnackbar={setOpenSnackbar}
      />
    </Box>
  );
};

export default memo(Signup);
