"use client";
import React, { useState } from "react";
import { Button, Box, Typography, Container, IconButton } from "@mui/material";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const GlassButton = styled(Button)({
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "10px",
  color: "black",
  padding: "10px 20px",
  textTransform: "none",
  fontSize: "16px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.4)",
  },
});

const GlassInput = styled("input")({
  width: "100%",
  padding: "12px 20px",
  margin: "8px 0",
  display: "inline-block",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  color: "black",
  fontSize: "16px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  outline: "none",
  "&::placeholder": {
    color: "black",
    opacity: 1,
  },
  "&:focus": {
    outline: "none",
  },
  // Disable autofill background color
  "&:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0px 1000px rgba(255, 255, 255, 0.2) inset",
    WebkitTextFillColor: "black", // Keep text color consistent
    transition: "background-color 5000s ease-in-out 0s",
  },
  "&:-webkit-autofill:hover": {
    WebkitBoxShadow: "0 0 0px 1000px rgba(255, 255, 255, 0.2) inset",
  },
  "&:-webkit-autofill:focus": {
    WebkitBoxShadow: "0 0 0px 1000px rgba(255, 255, 255, 0.2) inset",
  },
  "&:-webkit-autofill:active": {
    WebkitBoxShadow: "0 0 0px 1000px rgba(255, 255, 255, 0.2) inset",
  },
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleLogin = () => {
    // Handle login logic here
    router.push("/user");
  };

  const handleTwitterLogin = () => {
    // Handle Twitter login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        padding: { xs: 2, md: 4 },
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={{ xs: 3, md: 4 }}>
        Welcome Back to PurrGatto!
      </Typography>
      <Typography variant="h6" mb={{ xs: 2, md: 4 }}>
        Log in to continue your journey.
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <GlassInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Box sx={{ position: "relative" }}>
          <GlassInput
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <IconButton
            onClick={togglePasswordVisibility}
            sx={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "black",
            }}
          >
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </IconButton>
        </Box>
        <GlassButton
          fullWidth
          onClick={handleLogin}
          sx={{ mt: { xs: 2, md: 3 } }}
        >
          Log In
        </GlassButton>
        <Typography variant="body2" mt={{ xs: 2, md: 3 }} mb={{ xs: 1, md: 2 }}>
          or
        </Typography>
        <GlassButton
          fullWidth
          onClick={handleTwitterLogin}
          sx={{
            mt: { xs: 2, md: 3 },
            background: "#1DA1F2",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          startIcon={<FaXTwitter />}
        >
          Log In with Twitter
        </GlassButton>
      </Box>
      <Typography variant="body2" mt={{ xs: 3, md: 4 }}>
        Don&apos;t have an account?{" "}
        <Box
          sx={{ textDecoration: "none", color: "#FFBA6D" }}
          component={Link}
          href="/signup"
        >
          Sign Up
        </Box>
      </Typography>
    </Container>
  );
};

export default Login;
