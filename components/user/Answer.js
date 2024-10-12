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
import { format } from "date-fns";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { BsReplyAll } from "react-icons/bs";
import { useState } from "react";
export const Answer = ({ answer, setAnswers }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [liked, setLiked] = useState(false);
  // Handle like toggle
  const handleLikeToggle = async () => {
    setLiked(!liked);
    setAnswers((prevAnswers) => {
      return prevAnswers.map((a) =>
        a.ask === answer.ask
          ? { ...a, likes: liked ? a.likes - 1 : a.likes + 1 }
          : a
      );
    });
  };
  // Open delete menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // Close delete menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  // Handle delete action
  const handleDelete = () => {
    setAnswers((prevAnswers) =>
      prevAnswers.filter((a) => a.ask !== answer.ask)
    );
    handleMenuClose();
  };

  return (
    <Box
      sx={{
        mb: 3,
        p: 3,
        borderRadius: "20px",
        background: "white", // Frosted glass background
        border: "1px solid rgba(255, 255, 255, 0.5)", // Glass effect border
        backdropFilter: "blur(10px)", // Frosted glass effect
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative", // To position delete dots on top-right
      }}
    >
      {/* Three dots for delete option */}
      <IconButton
        aria-label="delete"
        onClick={handleMenuClick}
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "#6A6A6A", // Neutral color for the dots
        }}
      >
        <PiDotsThreeOutlineLight />
      </IconButton>
      {/* Menu for delete with glass effect */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.25)", // Semi-transparent background
            backdropFilter: "blur(10px)", // Frosted glass effect
            borderRadius: 2,
            border: "1px solid rgba(255, 255, 255, 0.18)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)", // Glass-like shadow
            p: 1,
            width: 170, // Adjust width to match
          },
        }}
      >
        <MenuItem>
          <Box sx={{ backdropFilter: "blur(10px)", borderRadius: 1 }}>
            <Typography variant="body2">Share</Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleDelete}>
          <Typography variant="body2" color="error">
            Delete
          </Typography>
        </MenuItem>
      </Menu>
      {/* The Ask */}
      <Typography variant="h6" sx={{ fontWeight: 500, color: "black" }}>
        {answer.ask}
      </Typography>
      {/* Avatar and User Info */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Avatar
          src={answer.userAvatar}
          alt={answer.userName}
          sx={{ width: 40, height: 40, border: "2px solid #fdecd2" }}
        />
        <Box sx={{ ml: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: "#6A6A6A", fontWeight: 500 }}
          >
            {answer.userName}
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ fontWeight: 500 }}
          >
            {format(new Date(answer.date), "MMM dd, yyyy")}
          </Typography>
        </Box>
      </Box>
      {/* The Answer */}
      <Typography variant="body1" sx={{ mt: 1, color: "black" }}>
        {answer.answer}
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
          onClick={handleLikeToggle}
          sx={{ color: liked ? "red" : "#6A6A6A" }}
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
          <Typography variant="body2" color="black" sx={{ ml: 1 }}>
            {answer.likes}
          </Typography>
        </IconButton>
        {/* End of Heart Icon Toggle */}
        {/* Reply Icon */}
        <IconButton aria-label="reply" sx={{ color: "#6A6A6A" }}>
          <BsReplyAll />
        </IconButton>
        {/* End of Reply Icon */}
      </Box>
    </Box>
  );
};
