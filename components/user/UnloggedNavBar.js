"use client";
import { Box, Button } from "@mui/material";
export default function GuestNavBar() {
  return (
    <Button
      sx={{
        position: "sticky",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        mt: 2,
        backdropFilter: "blur(10px)",
        borderRadius: "50px",
        padding: 2,
        width: { xs: "96%", sm: "60%" },
        border: "1px solid rgba(255, 255, 255, 0.3)",
        alignSelf: "center",
        top: 16,
        textAlign: "center",
        justifyContent: "center",
        zIndex:100,
        color:"black"
      }}
    >
      <Box color={"black"} fontWeight={"500"} sx={{
        fontFamily:"__Roboto_b0d14b"
      }}>Join As A Member</Box>
    </Button>
  );
}
