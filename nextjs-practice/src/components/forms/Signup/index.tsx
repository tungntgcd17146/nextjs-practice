"use client";

import { memo, useState } from "react";

//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme, Theme } from "@mui/material";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import InputBase from "@mui/material/InputBase";

//components
import DarkLogo from "@/public/assets/DarkLogo.webp";
import LightLogo from "@/public/assets/LightLogo.webp";
import SideBar from "@/src/components/forms/Signup/SideBar";
import Input from "@/src/components/ui/Input";
import Button from "@/src/components/ui/Button";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

//utils
import useScreenWidth from "@/src/hooks/useScreenWidth";
import Logo from "@/src/components/ui/Logo";
import { useMode } from "@/src/contexts/modeContext/useModeContext";


export interface Props {}

const authInputStyles = (theme: Theme) => ({
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.secondary,
  borderRadius: "12px",
  height: "72px",
  margin: " 0px 6px",
  fontSize: 48,
  fontWeight: 600,
});

const Signup = () => {
  const theme = useTheme();
  const { isDarkMode } = useMode();
  const { isMobile } = useScreenWidth();

  const [isAuth, setIsAuth] = useState(false);

  const logo = isDarkMode ? LightLogo : DarkLogo;

  return (
    <Box display="flex" flex="row">
      {/*Sign Up Side bar */}
      {!isMobile && <SideBar />}

      {/* Content */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          padding: "24px",
          width: "100%",
        }}
        display="flex"
        justifyContent="center"
      >
        <Box sx={{ position: "absolute", top: "24px", left: "24px" }}>
          <Logo logoImage={logo} alt="logo" />
        </Box>
        <Typography
          sx={{ position: "absolute", top: "40px", right: "40px" }}
          variant="caption"
        >
          Already a member?{" "}
          <Link
            style={{
              color: theme.palette.text.secondary,
              textDecoration: "none",
              fontWeight: 700,
            }}
            href={"/"}
          >
            Sign in
          </Link>
        </Typography>
        <Grid
          container
          sx={{
            height: "100vh",
            width: isMobile ? "100%" : "350px",
            marginTop: "370px",
          }}
          display="flex"
          flexDirection="column"
        >
          <Typography
            sx={{ marginBottom: "32px", color: theme.palette.text.secondary }}
            variant="h2"
          >
            Sign up
          </Typography>

          {/* Signup with email */}
          {!isAuth && (
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

              <Divider
                sx={{ color: theme.palette.grey[100], marginBottom: "12px" }}
              />

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
          )}

          {/* Auth code */}
          {isAuth && (
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

              <Box
                display="flex"
                flexDirection="row"
                sx={{ marginBottom: "12px" }}
              >
                <InputBase sx={(theme) => authInputStyles(theme)} />
                <InputBase sx={(theme) => authInputStyles(theme)} />
                <InputBase sx={(theme) => authInputStyles(theme)} />
                <InputBase sx={(theme) => authInputStyles(theme)} />
              </Box>
            </>
          )}

          <Button
            sx={{ marginBottom: "32px" }}
            aria-label="apply-button"
            children="Continue"
            color="primary"
            //TODO: will implement authentication code by email in the future
            onClick={() => setIsAuth(!isAuth)}
          />

          <Typography sx={{ marginBottom: "32px" }} variant="body1">
            This site is protected by reCAPTCHA and the Google Privacy Policy.
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default memo(Signup);
