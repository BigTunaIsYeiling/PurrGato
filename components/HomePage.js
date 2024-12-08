"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  List,
} from "@mui/material";
import { VscSearch } from "react-icons/vsc";
import UserLayout from "@/components/UserLayout";
import ListItemUser from "@/components/ListItemUser";
export default function Home({ usersData, user }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = usersData.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <UserLayout data={user}>
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
            "&::-webkit-scrollbar": { width: "6px" },
            "&::-webkit-scrollbar-track": { backgroundColor: "#f6eee6" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#f0c080",
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
              {filteredUsers.map((user, i) => (
                <ListItemUser key={user.id} user={user} />
              ))}
            </List>
          )}
        </Box>
      </Box>
    </UserLayout>
  );
}
