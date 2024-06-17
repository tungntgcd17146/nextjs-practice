"use client";

import { memo } from "react";

//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

//components
import DarkLogo from "@/public/assets/DarkLogo.webp";
import LightLogo from "@/public/assets/LightLogo.webp";

import Input from "@/src/components/ui/Input";
import Button from "@/src/components/ui/Button";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

//utils
import useScreenWidth from "@/src/hooks/useScreenWidth";
import Logo from "@/src/components/ui/Logo";
import { useMode } from "@/src/contexts/modeContext/useModeContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface Props {}

const Login = () => {
  const theme = useTheme();
  const { isDarkMode } = useMode();
  const { isMobile } = useScreenWidth();
  const router = useRouter();

  const logo = isDarkMode ? LightLogo : DarkLogo;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Grid
        container
        sx={{
          padding: "24px",
          height: "100vh",
          width: isMobile ? "100%" : "350px",
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {/* Header */}
        <Box sx={{ marginTop: "70px", marginBottom: "32px" }}>
          <Logo logoImage={logo} alt="logo" />
        </Box>

        {/* Content */}
        <Typography
          sx={{ marginBottom: "32px", color: theme.palette.text.secondary }}
          variant="h2"
        >
          Sign in
        </Typography>
        <Typography
          sx={{ marginBottom: "20px", color: theme.palette.text.secondary }}
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

        <Divider
          sx={{ color: theme.palette.grey[100], marginBottom: "12px" }}
        />

        <Typography
          sx={{ marginBottom: "20px", color: theme.palette.text.secondary }}
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
        <Input
          startIcon={<LockIcon />}
          containerStyles={{ marginBottom: "12px" }}
          startIconStyles={{ color: theme.palette.text.primary }}
          sx={{ marginLeft: "12px" }}
          placeholder="Password"
        />
        <Button
          sx={{ marginBottom: "32px" }}
          aria-label="apply-button"
          children="Sign in"
          color="primary"
          onClick={() => {
            //TODO: should implement login feature here
            router.push("/shop");
          }}
        />

        <Typography sx={{ marginBottom: "32px" }} variant="body1">
          This site is protected by reCAPTCHA and the Google Privacy Policy.
        </Typography>

        <Typography sx={{ marginBottom: "32px" }} variant="caption">
          Don’t have an account?{" "}
          <Link
            style={{
              color: theme.palette.text.secondary,
              textDecoration: "none",
              fontWeight: 700,
            }}
            href={"/signup"}
          >
            Sign up
          </Link>
        </Typography>
      </Grid>
    </Box>
  );
};

export default memo(Login);
