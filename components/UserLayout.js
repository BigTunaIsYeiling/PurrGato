"use client";
import NavBar from "@/components/user/NavBar";
import GuestNavBar from "@/components/user/UnloggedNavBar";
import { Box } from "@mui/material";
import useSWR from "swr";
import LoadingScreen from "./LoadingScreen";
const UserLayout = ({ children }) => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/user/`
  );
  if (isLoading) return <LoadingScreen />;
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {error ? (
        <GuestNavBar />
      ) : (
        <NavBar
          avatar={data.avatar}
          isTwitter={data.isTwitter}
          username={data.username}
          id={data.id}
          messages={data.messages}
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
