"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Home - Followers' Asks</Typography>
      <Typography variant="body1">
        This is where you will see all the asks from your followers.
      </Typography>
    </Box>
  );
};

export default Home;
