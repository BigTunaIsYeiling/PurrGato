"use client";
import NavBar from "@/components/user/NavBar";
import GuestNavBar from "@/components/user/UnloggedNavBar";
import { Box } from "@mui/material";
const UserLayout = ({ children, data }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {!data ? (
        <GuestNavBar />
      ) : (
        <NavBar
          avatar={data.avatar}
          isTwitter={data.isTwitter}
          username={data.username}
          id={data.id}
          messages={data.messages}
          notifications={data.notifications}
        />
      )}
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          overflowY: "auto",
          zIndex: 1,
          marginTop: error ? "-80px" : "-100px", // Ensure this matches or slightly exceeds your NavBar height
          paddingTop: error ? "80px" : "100px", // Adjust padding to ensure content is not hidden behind the header
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default UserLayout;
