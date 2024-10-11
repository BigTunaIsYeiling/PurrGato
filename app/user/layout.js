"use client";
import React from "react";
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import { VscAccount, VscBell, VscHome, VscMail } from "react-icons/vsc";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/logo.png"; // Adjust this path if necessary

const UserLayout = ({ children }) => {
  const pathname = usePathname();
  const userid = "123"; // Replace with dynamic user ID

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
            width: { xs: "90%", sm: "60%" },
            justifyContent: "space-between",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
            <Link href={`/user/${userid}`} passHref>
              <IconButton
                sx={{
                  color: pathname === `/user/${userid}` ? "#FFBA6D" : "#777",
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
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, padding: 2 }}>{children}</Box>
    </Box>
  );
};

export default UserLayout;
