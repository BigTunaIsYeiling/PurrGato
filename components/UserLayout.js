"use client";
import NavBar from "@/components/user/NavBar";
import GuestNavBar from "@/components/user/UnloggedNavBar";
import { Box } from "@mui/material";
import useSWR from "swr";
const UserLayout = ({ children }) => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/user/`
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <NavBar
        avatar={data.avatar}
        isTwitter={data.isTwitter}
        username={data.username}
        id={data.id}
      />
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
