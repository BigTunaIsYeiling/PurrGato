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

const GlassButton = styled(Button)({
  background: "#FCE3CD",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "10px",
  color: "black",
  padding: "5px 10px",
  textTransform: "none",
  fontSize: "14px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  position: "absolute",
  bottom: 10,
  right: 10,
  "&:hover": {
    background: "#FCE3CD",
    border: "1px solid rgba(255, 255, 255, 0.4)",
  },
});

const UserProfile = ({ params }) => {
  const { userid } = use(params);
  const userData = {
    1: {
      id: 1,
      name: "Alice",
      avatar: "https://i.pravatar.cc/150?img=1",
      answers: 5,
    },
    2: {
      id: 2,
      name: "Bob",
      avatar: "https://i.pravatar.cc/150?img=2",
      answers: 10,
    },
    // Add more user data here
  };
  const user = userData[userid];
  const [message, setMessage] = useState("");

  if (!user) {
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
        }}
      >
        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={{ width: 100, height: 100 }}
        />

        <Typography variant="h4" sx={{ mt: 2 }}>
          {user.name}
        </Typography>
        <Typography variant="body1">{user.answers} answers</Typography>
        <Box sx={{ position: "relative", width: "100%", maxWidth: 600 }}>
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
              backgroundColor: "white", // Frosted glass background
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

          <GlassButton disabled={message == ""}>Send</GlassButton>
        </Box>
        <Answers />
      </Box>
    </UserLayout>
  );
};

export default UserProfile;
