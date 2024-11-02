"use client";
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Typography,
} from "@mui/material";
import { format, formatDistanceToNow } from "date-fns";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { useState } from "react";
import { mutate } from "swr";
import toast from "react-hot-toast";
import ReAsk from "./ReAsk";
export const SubAnswer = ({
  post,
  avatar,
  username,
  userid,
  useridPosts,
  isSubAnswer,
  postParam,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  // Open delete menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // Close delete menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const createdAt = new Date(post.createdAt);
  const formatDate = () => {
    const now = new Date();
    const differenceInHours = (now - createdAt) / 1000 / 60 / 60;

    if (differenceInHours < 24) {
      return formatDistanceToNow(createdAt, { addSuffix: true });
    } else {
      return format(createdAt, "MM/dd/yyyy");
    }
  };
  const LikePost = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post/like`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: post.postId,
        }),
        credentials: "include",
      }
    );
    const data = await response.json();
    if (response.ok) {
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/post/p/${postParam}`);
    } else {
      return toast.error(data.error);
    }
  };
  const DeletePost = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post/${post.postId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    const data = await response.json();
    if (response.ok) {
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/post/p/${postParam}`);
    } else {
      return toast.error(data.error);
    }
  };
  return (
    <Box
      sx={{
        mb: 3,
        p: 3,
        borderRadius: "20px",
        background: isSubAnswer ? "#fffaf0" : "#fffcf2", // Slight color change for sub-answers
        border: isSubAnswer
          ? "1px solid #fdecd2"
          : "1px solid rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
        ml: isSubAnswer ? 4 : 0, // Indentation for sub-answers
      }}
    >
      {useridPosts == userid && (
        <>
          <IconButton
            aria-label="delete"
            onClick={handleMenuClick}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "#6A6A6A",
            }}
          >
            <PiDotsThreeOutlineLight />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(10px)",
                borderRadius: 2,
                border: "1px solid rgba(255, 255, 255, 0.18)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                p: 1,
                width: 170,
              },
            }}
          >
            <MenuItem>
              <Box sx={{ backdropFilter: "blur(10px)", borderRadius: 1 }}>
                <Typography variant="body2">Share</Typography>
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem onClick={DeletePost}>
              <Typography variant="body2" color="error">
                Delete
              </Typography>
            </MenuItem>
          </Menu>
        </>
      )}
      {/* The Ask */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          color: "black",
          whiteSpace: "pre-wrap",
          "&.MuiTypography-h6": {
            lineHeight: 1,
          },
          direction: "rtl",
          textAlign: "left",
        }}
      >
        {post.ask}
      </Typography>
      {/* Avatar and User Info */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Avatar
          src={avatar}
          alt={username}
          sx={{ width: 40, height: 40, border: "2px solid #fdecd2" }}
        />
        <Box sx={{ ml: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: "#6A6A6A", fontWeight: 500 }}
          >
            {username}
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ fontWeight: 500 }}
          >
            {formatDate()}
          </Typography>
        </Box>
      </Box>
      {/* The Answer */}
      <Typography
        variant="body1"
        sx={{
          my: 2,
          color: "black",
          whiteSpace: "pre-wrap",
          fontSize: isSubAnswer ? "0.9rem" : "1rem", // Slightly smaller font for sub-answers
          direction: "rtl",
          textAlign: "left",
        }}
      >
        {post.answer}
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      {/* Icons for Heart React and Reply */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          justifyContent: "space-between",
        }}
      >
        {/* Heart Icon Toggle */}
        <IconButton
          aria-label="like"
          sx={{ color: post.likes.includes(userid) ? "red" : "#6A6A6A" }}
          onClick={LikePost}
        >
          {post.likes.includes(userid) ? <FaHeart /> : <FaRegHeart />}
          <Typography variant="body2" color="black" sx={{ ml: 1 }}>
            {post.likes.length}
          </Typography>
        </IconButton>
        <ReAsk
          messagehead={post.answer}
          senderid={userid}
          receiverid={useridPosts}
          postId={post.postId}
        />
      </Box>
    </Box>
  );
};
