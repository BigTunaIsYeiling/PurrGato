"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

const Messages = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Messages</Typography>
      <Typography variant="body1">This is where your messages will be displayed.</Typography>
    </Box>
  );
};

export default Messages;
