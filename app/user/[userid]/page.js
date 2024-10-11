"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
const UserProfile = () => {
  const router = useRouter();
  const userid = router.query
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">User Profile</Typography>
      <Typography variant="body1">
        This is the profile page for user with ID: {userid}
      </Typography>
    </Box>
  );
};

export default UserProfile;
