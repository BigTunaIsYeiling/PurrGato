"use client";
import Logo from "@/app/logo.png";
import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
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
    fontFamily:"__Roboto_b0d14b",
    fontWeight:"500"
  });

  return (
    <Stack
      height="100vh"
      alignItems="center"
      justifyContent="center"
      spacing={{ xs: 2, md: 3 }}
      sx={{ textAlign: "center", padding: { xs: 2, md: 4 } }}
    >
      <Box
        component={Image}
        src={Logo}
        alt="PurrGatto Logo"
        width={{ xs: 120, md: 250 }}
        height={{ xs: 120, md: 250 }}
        sx={{ mb: { xs: 2, md: 4 } }}
      />
      <Typography
        variant="h2"
        fontWeight={900}
        fontSize={{ xs: 35, md: 50 }}
        sx={{ mb: { xs: 1, md: 2 } }}
      >
        PurrGatto
      </Typography>
      <Typography
        variant="h5"
        fontWeight={400}
        fontSize={{ xs: 18, md: 30 }}
        sx={{ mb: { xs: 2, md: 3 } }}
      >
        Where every question has nine lives!
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <GlassButton
          onClick={() => {
            router.push("/login");
          }}
        >
          Already have an account?
        </GlassButton>
        <GlassButton
          onClick={() => {
            router.push("/signup");
          }}
        >
          New here? Sign up!
        </GlassButton>
      </Stack>
      <Typography variant="body2" mt={4} sx={{ fontSize: { xs: 12, md: 14 } }}>
        Developed with dedication by{" "}
        <span style={{ color: "#FFBA6D", fontWeight: "500" }}>Ahmed Anany</span>{" "}
        &copy; {new Date().getFullYear()}
      </Typography>
    </Stack>
  );
}
