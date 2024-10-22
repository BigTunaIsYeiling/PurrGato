"use client";
import NavBar from "@/components/user/NavBar";
import GuestNavBar from "@/components/user/UnloggedNavBar";
import { Box } from "@mui/material";
const UserLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <NavBar /> */}
      <GuestNavBar />
      {/* Added padding-top equal to AppBar height to prevent content overlap */}
      <Box
        sx={{
          flexGrow: 1,
          padding: 2, // Adjust this height to match the AppBar height + margin
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default UserLayout;
