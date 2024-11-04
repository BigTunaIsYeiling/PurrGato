import React from "react";
import { Box, Skeleton, Divider } from "@mui/material";

const PostSkeleton = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 600 }}>
      <Box
        sx={{
          mb: 3,
          p: 3,
          position: "relative",
        }}
      >
        {/* Ask Skeleton */}
        <Skeleton variant="text" width="100%" height={20} sx={{ mb: 2 }} />

        {/* Avatar and User Info Skeleton */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Skeleton variant="circular" width={40} height={40} />
          <Box sx={{ ml: 2 }}>
            <Skeleton variant="text" width={80} height={15} sx={{ mb: 1 }} />
            <Skeleton variant="text" width={60} height={12} />
          </Box>
        </Box>

        {/* Answer Skeleton */}
        <Skeleton variant="text" width="100%" height={20} sx={{ my: 2 }} />

        {/* Divider */}
        <Divider sx={{ mt: 2, mb: 2 }} />

        {/* Icons and Actions Skeleton */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
            justifyContent: "space-between",
          }}
        >
          <Skeleton variant="rectangular" width={80} height={20} />
          <Skeleton variant="circular" width={24} height={24} />
        </Box>
      </Box>
    </Box>
  );
};

export default PostSkeleton;
