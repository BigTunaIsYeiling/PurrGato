"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  styled,
  Button,
} from "@mui/material";
import UserLayout from "@/components/UserLayout";
import useSWR from "swr";
import LoadingScreen from "@/components/LoadingScreen";
import toast from "react-hot-toast";
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

const UserProfile = ({ children, data, userid, userdata }) => {
  const [message, setMessage] = useState("");
  const [direction, setDirection] = useState("ltr");
  const SendMessageRequest = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/message/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
          senderId: !userdata ? null : userdata.id,
          receiverId: userid,
        }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      toast.success("Message sent successfully");
      return setMessage("");
    } else {
      return toast.error(data.error);
    }
  };
  const handleTextChange = (e) => {
    const value = e.target.value;
    setMessage(value);

    // Set direction based on input language
    if (/[\u0600-\u06FF]/.test(value.trim().charAt(0))) {
      // Arabic Unicode range
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
  };
  return (
    <UserLayout data={userdata}>
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
            rows={4}
            value={message}
            onChange={handleTextChange}
            variant="outlined"
            slotProps={{
              inputLabel: {
                shrink: false,
              },
            }}
            sx={{
              whiteSpace: "pre-wrap",
              mt: 3,
              width: "100%",
              borderRadius: "25px",
              backgroundColor: "#FFFFFF",
              padding: "10px 15px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              overflow: "hidden",
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
              direction: direction,
            }}
          />
        </Box>
        <Box sx={{ width: "100%", maxWidth: 600 }}>
          <GlassButton
            disabled={message == ""}
            onClick={SendMessageRequest}
            sx={{ width: "100%" }}
          >
            Send
          </GlassButton>
        </Box>
        {/* {children} */}
      </Box>
    </UserLayout>
  );
};

export default UserProfile;
