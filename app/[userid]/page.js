"use client";
import React, { use, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  styled,
  Button,
} from "@mui/material";
import Answers from "@/components/user/Answers";
import UserLayout from "@/components/UserLayout";
import useSWR from "swr";
import LoadingScreen from "@/components/LoadingScreen";
const GlassButton = styled(Button)({
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "25px",
  color: "black",
  padding: "15px",
  textTransform: "none",
  fontSize: "14px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.3)",
  },
  marginTop: "10px",
  marginBottom: "10px",
});

const UserProfile = ({ params }) => {
  const { userid } = use(params);
  const [message, setMessage] = useState("");
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/user/one/${userid}`
  );
  if (isLoading) return <LoadingScreen />;
  if (!data || error) {
    return <Typography variant="h6">User not found</Typography>;
  }
  return (
    <UserLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
          overflowX: "hidden",
        }}
      >
        <Box
          p={1}
          sx={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
          borderRadius={"50%"}
        >
          <Avatar
            src={data.avatar}
            alt={data.username}
            sx={{ width: 70, height: 70 }}
          />
        </Box>
        <Typography sx={{ mt: 2, fontSize: "28px", fontWeight: 500 }}>
          {data.username}
        </Typography>
        <Typography
          variant="body1"
          sx={{ my: 1, fontWeight: "400", color: "#777", textAlign: "center" }}
        >
          {data.bio}
        </Typography>
        <Box sx={{ width: "100%", maxWidth: 600 }}>
          <TextField
            placeholder="Send Anonymous Message"
            multiline
            rows={2.8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
            InputLabelProps={{ shrink: false }}
            sx={{
              mt: 3,
              width: "100%",
              borderRadius: "25px",
              backgroundColor: "#FFFFFF", // Frosted glass background
              padding: "10px 15px",
              paddingBottom: "35px", // Prevent text from overlapping button
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              overflow: "hidden", // Remove scrollbar
              border: "1px solid rgba(255, 255, 255, 0.3)", // Glass effect border
              backdropFilter: "blur(10px)", // Frosted glass effect
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none", // Remove default border
                },
                "&.Mui-focused fieldset": {
                  border: "none", // Remove default border on focus
                },
                "&:hover fieldset": {
                  border: "none", // Remove default border on hover
                },
              },
              "& .MuiInputBase-inputMultiline": {
                "&::-webkit-scrollbar": {
                  display: "none", // Hide scrollbar
                },
              },
            }}
          />
        </Box>
        <Box sx={{ width: "100%", maxWidth: 600 }}>
          <GlassButton disabled={message == ""} sx={{ width: "100%" }}>
            Send
          </GlassButton>
        </Box>
        <Answers />
      </Box>
    </UserLayout>
  );
};

export default UserProfile;
