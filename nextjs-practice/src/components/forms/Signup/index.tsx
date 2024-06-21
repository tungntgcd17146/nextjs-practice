"use client";

import { memo, useState } from "react";

//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

//components
import DarkLogo from "@/public/assets/DarkLogo.webp";
import LightLogo from "@/public/assets/LightLogo.webp";
import SideBar from "@/src/components/forms/Signup/SideBar";
import Button from "@/src/components/ui/Button";
import Link from "next/link";
import AuthCode from "./AuthCode";
import AuthEmail from "./AuthEmail";

//utils
import useScreenWidth from "@/src/hooks/useScreenWidth";
import Logo from "@/src/components/ui/Logo";
import { useMode } from "@/src/contexts/modeContext/useModeContext";

export interface Props {}

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
          {!isAuth ? <AuthEmail /> : <AuthCode />}

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
