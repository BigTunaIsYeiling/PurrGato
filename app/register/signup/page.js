"use client";
import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Container,
  IconButton,
  Divider,
} from "@mui/material";
import { FaXTwitter } from "react-icons/fa6";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styled from "@emotion/styled";
import Link from "next/link";
import { Register } from "@/app/actions";
import { setToken } from "@/app/AssignToken";
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

const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = async () => {
    const res = await Register(username, password);
    if (res.success) {
      setToken(res.token);
    } else {
      console.log(res.errors);
    }
  };

  const handleTwitterSignup = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/user/auth/twitter`;
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
        Welcome to PurrGatto!
      </Typography>
      <Typography variant="h6" mb={{ xs: 2, md: 4 }}>
        Create your account and join the community.
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <GlassInput
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          autoComplete="username"
        />
        <Box sx={{ position: "relative" }}>
          <GlassInput
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
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
          onClick={handleSignup}
          sx={{ mt: { xs: 2, md: 3 } }}
        >
          Sign Up
        </GlassButton>
        <Typography variant="body2" mt={{ xs: 2, md: 3 }} mb={{ xs: 1, md: 2 }}>
          or
        </Typography>
        <GlassButton
          fullWidth
          onClick={handleTwitterSignup}
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
          Sign Up with Twitter
        </GlassButton>
      </Box>
      <Divider sx={{ mt: 4, mb: 2 }} />
      <Typography variant="body2" mb={2}>
        Already have an account ?
      </Typography>
      <GlassButton component={Link} href="/register">
        Log In
      </GlassButton>
    </Container>
  );
};

export default Signup;
