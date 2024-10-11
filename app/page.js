"use client";
import Logo from "@/app/logo.png";
import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
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

  return (
    <Stack
      height="100vh"
      alignItems="center"
      justifyContent="center"
      spacing={4}
      sx={{ textAlign: "center" }}
    >
      <Box
        component={Image}
        src={Logo}
        alt="PurrGatto Logo"
        width={{ xs: 150, md: 250 }}
        height={{ xs: 150, md: 250 }}
      />
      <Typography variant="h1" fontWeight={900} fontSize={{ xs: 40, md: 50 }}>
        PurrGatto
      </Typography>
      <Typography variant="h4" fontWeight={400} fontSize={{ xs: 20, md: 30 }}>
        Where every question has nine lives!
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <GlassButton>Already have an account?</GlassButton>
        <GlassButton>New here? Sign up!</GlassButton>
      </Stack>
      <Typography variant="body2" mt={4}>
        Built with passion by{" "}
        <span style={{ color: "#F87185", fontWeight: "500" }}>Big T</span>{" "}
        &copy; {new Date().getFullYear()}
      </Typography>
    </Stack>
  );
}
