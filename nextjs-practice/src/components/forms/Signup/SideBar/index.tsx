//mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, Theme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { themes } from '@/src/themes';

import SignupImg from '@/public/assets/signup-pic.png';

import Image from 'next/image';

const optionMessageStyles = (theme: Theme) => ({
  marginLeft: '8px',
  color: theme.palette.text.primary,
});

const SideBar = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: 'center',
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block',
        },
        backgroundColor: theme.palette.background.default,
        padding: '24px',
        width: '400px',
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        style={{ marginTop: '350px' }}
        width={180}
        height={170}
        src={SignupImg}
        alt="sign up"
        loading="eager"
      />
      <Typography
        sx={{
          marginBottom: '48px',
          marginTop: '30px',
          color: theme.palette.text.secondary,
        }}
        variant="h4"
      >
        Plan Includes
      </Typography>
      <Box display="flex" flexDirection="column" justifyContent="start">
        <Box display="flex" sx={{ marginBottom: '20px' }}>
          <CheckCircleOutlineIcon sx={{ color: themes.colors.green[600] }} />
          <Typography sx={optionMessageStyles} variant="body1">
            Unlimited product updates
          </Typography>
        </Box>
        <Box display="flex" sx={{ marginBottom: '20px' }}>
          <CheckCircleOutlineIcon sx={{ color: themes.colors.green[600] }} />
          <Typography sx={optionMessageStyles} variant="body1">
            Pro tips
          </Typography>
        </Box>
        <Box display="flex" sx={{ marginBottom: '20px' }}>
          <CheckCircleOutlineIcon sx={{ color: themes.colors.green[600] }} />
          <Typography sx={optionMessageStyles} variant="body1">
            Free forever
          </Typography>
        </Box>
        <Box display="flex" sx={{ marginBottom: '20px' }}>
          <CheckCircleOutlineIcon sx={{ color: themes.colors.green[600] }} />
          <Typography sx={optionMessageStyles} variant="body1">
            Full author options
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
