"use client";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";
import { RiQuestionAnswerFill } from "react-icons/ri";
import styled from "@emotion/styled";

const GlassButton = styled(Button)({
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "10px",
  color: "black",
  padding: "5px 10px",
  textTransform: "none",
  fontSize: "14px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.3)",
  },
});

const Notification = ({ notification }) => {
  return (
    <Paper
      sx={{
        mb: 2,
        p: 3,
        borderRadius: "16px",
        backgroundColor: "#fffcf2",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <Avatar
            src="https://i.pravatar.cc/150?img=anonymous" // Placeholder for anon photo
            alt="Anonymous"
            sx={{ width: 60, height: 60, mr: 2 }} // Adjust avatar size
          />
          {notification.type === "like" && (
            <Box
              sx={{
                position: "absolute",
                bottom: 2,
                right: 5,
                background: "white",
                borderRadius: "50%",
                padding: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoMdHeart size={16} color="red" />
            </Box>
          )}
          {notification.type === "reply" && (
            <Box
              sx={{
                position: "absolute",
                bottom: 2,
                right: 5,
                background: "white",
                borderRadius: "50%",
                padding: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RiQuestionAnswerFill size={16} color="#ffba6d" />
            </Box>
          )}
        </Box>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#333" }}>
            {notification.content}
          </Typography>
          <Typography variant="caption" sx={{ color: "#666" }}>
            {notification.timestamp}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mb: 1 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <GlassButton
          href={notification.link} // Link to the answer
          sx={{ textDecoration: "none" }}
        >
          View
        </GlassButton>
        <IconButton sx={{ color: "#333" }}>
          <AiOutlineDelete size={20} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Notification;
