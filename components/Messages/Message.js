"use client";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Avatar,
  Divider,
  Stack,
} from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import anon from "@/app/anon.png";
import Image from "next/image";
import { format, formatDistanceToNow } from "date-fns";
import { mutate } from "swr";
import ReplyComponent from "./ReplyComponent";
import ReplyOnPost from "./ReplyonPost";
const Message = ({ message, date, id, post, parentPost }) => {
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
  const DeleteMessage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/message`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messageId: id }),
      credentials: "include",
    });
    const data = await res.json();
    if (res.ok) {
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/message`);
      return mutate(`${process.env.NEXT_PUBLIC_API_URL}/user/`);
    }
    return console.log(data);
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
        <Stack direction={"column"}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#333" }}>
            Anonymous
          </Typography>
          <Typography variant="caption" sx={{ color: "#666" }}>
            {formatDate()}
          </Typography>
          {post && (
            <Typography variant="caption" sx={{ color: "#666" }}>
              {"Related to "}
              <Box component={"span"} sx={{ fontWeight: 600 }}>
                {post}
              </Box>
            </Typography>
          )}
        </Stack>
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: "#333",
          fontWeight: "500",
          mb: 1.5,
          whiteSpace: "pre-wrap",
        }}
      >
        {message}
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {!post ? (
          <ReplyComponent content={message} id={id} />
        ) : (
          <ReplyOnPost content={message} id={id} parentpost={parentPost} />
        )}
        <IconButton sx={{ color: "#555" }} onClick={DeleteMessage}>
          <AiOutlineDelete size={20} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Message;
