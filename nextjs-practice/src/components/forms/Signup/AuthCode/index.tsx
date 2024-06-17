//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme, Theme } from "@mui/material";

//components
import InputBase from "@mui/material/InputBase";

const authInputStyles = (theme: Theme) => ({
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.secondary,
  borderRadius: "12px",
  height: "72px",
  margin: " 0px 6px",
  fontSize: 48,
  fontWeight: 600,
  "& .MuiInputBase-input": {
    textAlign: "center",
  },
});

const AuthCode = () => {
  const theme = useTheme();

  return (
    <>
      <Typography
        sx={{
          marginBottom: "20px",
          color: theme.palette.text.secondary,
        }}
        variant="body1"
      >
        We just send you a verify code. Check your inbox to get them.
      </Typography>

      <Box display="flex" flexDirection="row" sx={{ marginBottom: "12px" }}>
        <InputBase sx={(theme) => authInputStyles(theme)} />
        <InputBase sx={(theme) => authInputStyles(theme)} />
        <InputBase sx={(theme) => authInputStyles(theme)} />
        <InputBase sx={(theme) => authInputStyles(theme)} />
      </Box>
    </>
  );
};

export default AuthCode;
