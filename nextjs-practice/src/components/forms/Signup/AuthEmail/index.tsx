//mui
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import Divider from "@mui/material/Divider";

//components
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

const AuthEmail = () => {
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
        Sign up with Open account
      </Typography>

      <Grid
        item
        sx={{ marginBottom: "24px" }}
        justifyContent="space-between"
        display="flex"
      >
        <Button
          aria-label="close-reset"
          children="Google"
          color="inherit"
          startIcon={<GoogleIcon />}
          sx={{ width: "100%", margin: "0px 4px" }}
        />
        <Button
          aria-label="apply-button"
          children="Apple ID"
          color="inherit"
          startIcon={<AppleIcon />}
          sx={{ width: "100%", margin: "0px 4px" }}
        />
      </Grid>

      <Divider sx={{ color: theme.palette.grey[100], marginBottom: "12px" }} />

      <Typography
        sx={{
          marginBottom: "20px",
          color: theme.palette.text.secondary,
        }}
        variant="body1"
      >
        Or continue with email address
      </Typography>

      <Input
        startIcon={<EmailIcon />}
        containerStyles={{ marginBottom: "12px" }}
        startIconStyles={{ color: theme.palette.text.primary }}
        sx={{ marginLeft: "12px" }}
        placeholder="Your email"
      />
    </>
  );
};

export default AuthEmail;
