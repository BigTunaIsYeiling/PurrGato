"use client";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { FaReply, FaTrashAlt } from "react-icons/fa";

const GlassButton = styled(Button)({
  background: "white",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "10px",
  color: "black",
  padding: "5px 10px",
  textTransform: "none",
  fontSize: "14px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

const Message = ({ message }) => {
  return (
    <Paper
      sx={{
        mb: 2,
        p: 3,
        borderRadius: "16px",
        backgroundColor: "white", // Frosted glass effect
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar
          src="https://i.pravatar.cc/150?img=anonymous" // Placeholder for anon photo
          alt="Anonymous"
          sx={{ width: 40, height: 40, mr: 2 }}
        />
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#333" }}>
            Anonymous
          </Typography>
          <Typography variant="caption" sx={{ color: "#666" }}>
            {message.timestamp}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{ color: "#333", fontWeight: "500", mb: 1.5 }}
      >
        {message.content} {/* Message ask in bold */}
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <GlassButton>Reply</GlassButton>
        <IconButton sx={{ color: "#555" }}>
          <AiOutlineDelete size={20} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Message;
