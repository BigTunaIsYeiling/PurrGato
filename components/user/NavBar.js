"use client";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Stack,
  Avatar,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { VscAccount, VscBell, VscHome, VscMail } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/logo.png"; // Adjust this path if necessary
import UserDialog from "@/components/ChangeUserSettings";
import { IoIosLogOut } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
export default function NavBar({ avatar, isTwitter, username, id }) {
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/logout`,
      {
        credentials: "include",
      }
    );
    if (response.ok) {
      router.push("/register");
    }
  };
  let isSharing = false;

  const CopyShareProfile = async (id) => {
    if (isSharing) {
      console.warn("A share action is already in progress.");
      return;
    }
    const url = `${window.location.origin}/${id}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=Check out this profile!`;

    isSharing = true;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this profile!",
          text: "Check out this profile!",
          url: twitterShareUrl,
        });
      } catch (err) {
        console.error("Error sharing profile:", err);
      } finally {
        isSharing = false;
      }
    } else {
      // Fallback for browsers that do not support navigator.share
      window.open(twitterShareUrl, "_blank");
      isSharing = false;
    }
  };
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              borderRadius: 2,
              border: "1px solid rgba(255, 255, 255, 0.18)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              p: 1,
              width: 200,
            },
          },
        }}
      >
        <UserDialog
          isTwitter={isTwitter}
          username={username}
          avatar={avatar}
        />
        <MenuItem
          sx={{ display: "flex", justifyContent: "space-between" }}
          onClick={() => CopyShareProfile(id)}
        >
          <Typography>Share profile</Typography>
          <ListItemIcon>
            <IoShareOutline size={20} />
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleLogout}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box color="#d32f2f">Sign out</Box>
          <ListItemIcon>
            <IoIosLogOut size={20} color="#d32f2f" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          mt: 2,
          backdropFilter: "blur(10px)",
          borderRadius: "50px",
          padding: 2,
          width: { xs: "96%", sm: "60%" },
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          alignSelf: "center",
          top: 16,
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
            <Link href="/" passHref>
              <IconButton
                sx={{
                  color: pathname === "/" ? "#FFBA6D" : "#777",
                  transition: "color 0.3s",
                }}
              >
                <VscHome size={24} />
              </IconButton>
            </Link>
            <Link href={`/1`} passHref>
              <IconButton
                sx={{
                  color:
                    pathname == `/` ||
                    pathname == "/messages" ||
                    pathname == "/notifications"
                      ? "#777"
                      : "#FFBA6D",
                  transition: "color 0.3s",
                }}
              >
                <VscAccount size={24} />
              </IconButton>
            </Link>
            <Link href="/messages" passHref>
              <IconButton
                sx={{
                  color: pathname === "/messages" ? "#FFBA6D" : "#777",
                  transition: "color 0.3s",
                }}
              >
                <VscMail size={24} />
              </IconButton>
            </Link>
            <Link href="/notifications" passHref>
              <IconButton
                sx={{
                  color: pathname === "/notifications" ? "#FFBA6D" : "#777",
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
            <Avatar
              alt="User Avatar"
              src={avatar}
              sx={{
                width: 32,
                height: 32,
              }}
            />
          </IconButton>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              gap: 3,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Link href="/" passHref>
              <IconButton
                sx={{
                  color: pathname === "/" ? "#FFBA6D" : "#777",
                  transition: "color 0.3s",
                }}
              >
                <VscHome size={24} />
              </IconButton>
            </Link>
            <Link href={`/1`} passHref>
              <IconButton
                sx={{
                  color:
                    pathname == `/` ||
                    pathname == "/messages" ||
                    pathname == "/notifications"
                      ? "#777"
                      : "#FFBA6D",
                  transition: "color 0.3s",
                }}
              >
                <VscAccount size={24} />
              </IconButton>
            </Link>
            <Link href="/messages" passHref>
              <IconButton
                sx={{
                  color: pathname === "/messages" ? "#FFBA6D" : "#777",
                  transition: "color 0.3s",
                }}
              >
                <VscMail size={24} />
              </IconButton>
            </Link>
            <Link href="/notifications" passHref>
              <IconButton
                sx={{
                  color: pathname === "/notifications" ? "#FFBA6D" : "#777",
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
              <Avatar
                alt="User Avatar"
                src={avatar}
                sx={{
                  width: 32,
                  height: 32,
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </AppBar>
    </>
  );
}
