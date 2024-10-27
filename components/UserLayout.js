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
        position: "relative",
      }}
    >
      <NavBar />
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          overflowY: "auto",
          zIndex: 1,
          marginTop: "-100px", // Ensure this matches or slightly exceeds your NavBar height
          paddingTop: "100px", // Adjust padding to ensure content is not hidden behind the header
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default UserLayout;
