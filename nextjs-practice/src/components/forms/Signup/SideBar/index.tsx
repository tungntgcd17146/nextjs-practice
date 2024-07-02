//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme, Theme } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { themes } from "@/src/themes";

import SignupImg from "@/public/assets/signup-pic.png";

import Image from "next/image";

const optionMessageStyles = (theme: Theme) => ({
  marginLeft: "8px",
  color: theme.palette.text.primary,
});

const SideBar = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: "24px",
        width: "400px",
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        style={{ width: "180px", height: "170px", marginTop: "350px" }}
        src={SignupImg}
        alt="sign up"
      />
      <Typography
        sx={{
          marginBottom: "48px",
          marginTop: "30px",
          color: theme.palette.text.secondary,
        }}
        variant="h4"
      >
        Plan Includes
      </Typography>
      <Box display="flex" flexDirection="column" justifyContent="start">
        <Box display="flex" sx={{ marginBottom: "20px" }}>
          <CheckCircleOutlineIcon sx={{ color: themes.colors.green[600] }} />
          <Typography sx={optionMessageStyles} variant="body1">
            Unlimited product updates
          </Typography>
        </Box>
        <Box display="flex" sx={{ marginBottom: "20px" }}>
          <CheckCircleOutlineIcon sx={{ color: themes.colors.green[600] }} />
          <Typography sx={optionMessageStyles} variant="body1">
            Pro tips
          </Typography>
        </Box>
        <Box display="flex" sx={{ marginBottom: "20px" }}>
          <CheckCircleOutlineIcon sx={{ color: themes.colors.green[600] }} />
          <Typography sx={optionMessageStyles} variant="body1">
            Free forever
          </Typography>
        </Box>
        <Box display="flex" sx={{ marginBottom: "20px" }}>
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
