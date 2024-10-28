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
const fetcher = (...args) =>
  fetch(...args, {
    credentials: "include",
  }).then((res) => res.json());
export default function Home() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/user/`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(data);
  const [searchTerm, setSearchTerm] = useState("");
  const users = [
    {
      id: 1,
      name: "Alice",
      avatar: "https://i.pravatar.cc/150?img=1",
      answers: 5,
    },
    {
      id: 2,
      name: "Bob",
      avatar: "https://i.pravatar.cc/150?img=2",
      answers: 10,
    },
    {
      id: 3,
      name: "Charlie",
      avatar: "https://i.pravatar.cc/150?img=3",
      answers: 8,
    },
    {
      id: 4,
      name: "Diana",
      avatar: "https://i.pravatar.cc/150?img=4",
      answers: 12,
    },
    {
      id: 5,
      name: "Edward",
      avatar: "https://i.pravatar.cc/150?img=5",
      answers: 3,
    },
    {
      id: 6,
      name: "Fiona",
      avatar: "https://i.pravatar.cc/150?img=6",
      answers: 9,
    },
    {
      id: 7,
      name: "George",
      avatar: "https://i.pravatar.cc/150?img=7",
      answers: 6,
    },
    {
      id: 8,
      name: "Hannah",
      avatar: "https://i.pravatar.cc/150?img=8",
      answers: 15,
    },
    {
      id: 9,
      name: "Ian",
      avatar: "https://i.pravatar.cc/150?img=9",
      answers: 2,
    },
    {
      id: 10,
      name: "Jane",
      avatar: "https://i.pravatar.cc/150?img=10",
      answers: 7,
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                <ListItem key={user.id}>
                  <ListItemAvatar>
                    <Avatar src={user.avatar} alt={user.name} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.name}
                    secondary={`${user.answers} answers`}
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
