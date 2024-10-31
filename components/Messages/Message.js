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
import anon from "@/app/anon.png";
import Image from "next/image";
import { format, formatDistanceToNow } from "date-fns";
const Message = ({ message, date }) => {
  const createdAt = new Date(date);

  const formatDate = () => {
    const now = new Date();
    const differenceInHours = (now - createdAt) / 1000 / 60 / 60;

    if (differenceInHours < 24) {
      return formatDistanceToNow(createdAt, { addSuffix: true });
    } else {
      return format(createdAt, "MM/dd/yyyy");
    }
  };
  return (
    <Paper
      sx={{
        mb: 2,
        p: 3,
        borderRadius: "16px",
        backgroundColor: "#fffcf2", // Frosted glass effect
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar sx={{ width: 40, height: 40, mr: 2 }}>
          <Image src={anon} alt="Anonymous" width={40} height={40} />
        </Avatar>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#333" }}>
            Anonymous
          </Typography>
          <Typography variant="caption" sx={{ color: "#666" }}>
            {formatDate()}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{ color: "#333", fontWeight: "500", mb: 1.5 }}
      >
        {message} {/* Message ask in bold */}
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
