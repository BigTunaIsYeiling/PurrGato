"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import { VscAccount, VscBell, VscHome, VscMail } from "react-icons/vsc";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/logo.png"; // Adjust this path if necessary
import UserDialog from "@/components/ChangeUserSettings";

const UserLayout = ({ children }) => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // Prevents extra scroll
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "50px",
            padding: 2,
            width: { xs: "96%", sm: "60%" },
            justifyContent: { xs: "center", sm: "space-between" },
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Image src={Logo} alt="PurrGatto Logo" width={40} height={40} />
          </Box>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="/user" passHref>
              <IconButton
                sx={{
                  color: pathname === "/user" ? "#FFBA6D" : "#777",
                  transition: "color 0.3s",
                }}
              >
                <VscHome size={24} />
              </IconButton>
            </Link>
            <Link href={`/user/1`} passHref>
              <IconButton
                sx={{
                  color:
                    pathname == `/user` ||
                    pathname == "/user/messages" ||
                    pathname == "/user/notifications"
                      ? "#777"
                      : "#FFBA6D",
                  transition: "color 0.3s",
                }}
              >
                <VscAccount size={24} />
              </IconButton>
            </Link>
            <Link href="/user/messages" passHref>
              <IconButton
                sx={{
                  color: pathname === "/user/messages" ? "#FFBA6D" : "#777",
                  transition: "color 0.3s",
                }}
              >
                <VscMail size={24} />
              </IconButton>
            </Link>
            <Link href="/user/notifications" passHref>
              <IconButton
                sx={{
                  color:
                    pathname === "/user/notifications" ? "#FFBA6D" : "#777",
                  transition: "color 0.3s",
                }}
              >
                <VscBell size={24} />
              </IconButton>
            </Link>
          </Box>
          <IconButton
            onClick={handleMenuClick}
            sx={{
              color: "#777",
              transition: "color 0.3s",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Box shadow added
              "&:hover": {
                color: "#FCE3CD", // Optional: Change color on hover
              },
              ml: { xs: 3, sm: 0 },
            }}
          >
            <Stack
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="body3" color="black">
                A
              </Typography>
            </Stack>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: "rgba(255, 255, 255, 0.25)", // Semi-transparent background
                backdropFilter: "blur(10px)", // Frosted glass effect
                borderRadius: 2,
                border: "1px solid rgba(255, 255, 255, 0.18)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)", // Glass-like shadow
                p: 1,
                width: 250, // Adjust width to match
              },
            }}
          >
            {/* Profile Information */}
            <UserDialog />
            <Divider />
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="body2" color="error">
                Sign out
              </Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          overflowY: "auto", // Ensure scrolling if content overflows
          WebkitOverflowScrolling: "touch", // For smooth scrolling on iOS devices
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default UserLayout;
