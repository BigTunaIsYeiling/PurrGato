"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { VscSearch } from "react-icons/vsc";
import UserLayout from "@/components/UserLayout";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/LoadingScreen";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/user/users`
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <LoadingScreen />;
  const filteredUsers = data.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <UserLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
          Welcome to PurrGatto!
        </Typography>
        <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Search user..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box component={VscSearch} size={24} marginRight={1} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "25px", // Rounded corners
                backgroundColor: "white", // Frosted glass background
                padding: "5px 10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                backdropFilter: "blur(10px)", // Frosted glass effect
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove border
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "2px solid #FFBA6D",
                },
              },
            }}
            sx={{
              width: {
                xs: "100%",
                sm: 400,
              },
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: 600,
            maxHeight: {
              xs: "30vh",
              sm: "52vh",
            },
            overflowY: "auto",
            "&::-webkit-scrollbar": { width: "8px" },
            "&::-webkit-scrollbar-track": { backgroundColor: "#f6eee6" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#FCE3CD",
              borderRadius: "6px",
            },
          }}
        >
          {filteredUsers.length === 0 ? (
            <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
              No users exist
            </Typography>
          ) : (
            <List>
              {filteredUsers.map((user) => (
                <ListItem
                  alignItems="flex-start"
                  key={user.id}
                  sx={{
                    cursor: "pointer",
                    mb: 1,
                    p: 1,
                  }}
                  onClick={() => {
                    router.push(`/${user.id}`);
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={user.username}
                      src={user.avatar}
                      sx={{ width: 40, height: 40 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          fontSize: "17px",
                          color: "text.primary",
                        }}
                      >
                        {user.username}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{
                            fontSize: "15px",
                            display: "inline",
                            color: "black",
                            fontWeight: 500,
                          }}
                        >
                          0 answers
                        </Typography>
                        {" — "}
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ fontSize: "15px", color: "text.secondary" }}
                        >
                          {user.bio.slice(0, 55)}
                          {user.bio.length > 55 && ".."}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Box>
    </UserLayout>
  );
}
