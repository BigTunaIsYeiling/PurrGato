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
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          mt: 2,
          backdropFilter: "blur(10px)",
          borderRadius: "50px",
          padding: 2,
          width: { xs: "96%", sm: "60%" },
          maxWidth: "1200px", // Set a maximum width to prevent resizing
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          left: "50%",
          transform: "translateX(-50%)", // Center it horizontally
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Ensures proper alignment
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
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
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
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                color: "#FCE3CD",
              },
              display: { xs: "none", sm: "inline-flex " },
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
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              gap: 3,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
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
            <IconButton
              onClick={handleMenuClick}
              sx={{
                color: "#777",
                transition: "color 0.3s",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  color: "#FCE3CD",
                },
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
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(10px)",
                borderRadius: 2,
                border: "1px solid rgba(255, 255, 255, 0.18)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                p: 1,
                width: 250,
              },
            }}
          >
            <UserDialog />
            <Divider />
            <MenuItem onClick={handleMenuClose}>
              <Typography variant="body2" color="error">
                Sign out
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </AppBar>
      {/* Added padding-top equal to AppBar height to prevent content overlap */}
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          paddingTop: "80px", // Adjust this height to match the AppBar height + margin
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default UserLayout;
