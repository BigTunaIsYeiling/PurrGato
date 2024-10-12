"use client";
import * as React from "react";
import {
  Button,
  Dialog,
  IconButton,
  Typography,
  Slide,
  Box,
  MenuItem,
  Stack,
  Divider,
  Avatar,
  TextField,
} from "@mui/material";
import { CiSettings } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { styled } from "@mui/system";
import { TbCameraMinus } from "react-icons/tb";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GlassButton = styled(Button)({
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "10px",
  color: "black",
  padding: "5px 10px",
  textTransform: "none",
  fontSize: "14px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.3)",
  },
});

export default function UserDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MenuItem onClick={handleClickOpen}>
        <Box
          sx={{
            backdropFilter: "blur(10px)",
            borderRadius: 1,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body1" fontWeight="600">
              Ahmed
            </Typography>
            <CiSettings size={20} />
          </Stack>
          <Typography variant="body2">ahmedenany9812@gmail.com</Typography>
        </Box>
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullScreen={{ xs: true, sm: false }}
        PaperProps={{
          sx: {
            background: "linear-gradient(180deg, #f8f4f0, #fdecd2)", // Gradient background
            borderRadius: { xs: 0, sm: "10px" },
            padding: "20px",
            height: { xs: "100%", sm: "auto" }, // Full height on small screens, auto on larger
            width: { xs: "100%", sm: "auto" }, // Full width on small screens, 600px on larger
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Edit User
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <AiOutlineClose />
          </IconButton>
        </Box>
        <Box sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              justifyContent: "center",
              position: "relative", // Ensures the IconButton positions relative to this Box
              width: "100%", // Match Avatar dimensions
              height: 80,
            }}
          >
            <Avatar
              src="https://i.pravatar.cc/150?img=1"
              alt="Upload Photo"
              sx={{ width: 80, height: 80 }}
            />
            <IconButton
              component="label"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)", // Slightly transparent background
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                },
              }}
            >
              <TbCameraMinus />
              <input hidden accept="image/*" type="file" />
            </IconButton>
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              variant="outlined"
              placeholder="New Username"
              InputProps={{
                sx: {
                  borderRadius: "25px",
                  backgroundColor: "white",
                  padding: "5px 10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(10px)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove border
                  },
                },
              }}
              sx={{ width: { xs: "100%", sm: 300 } }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              variant="outlined"
              placeholder="New Email"
              InputProps={{
                sx: {
                  borderRadius: "25px",
                  backgroundColor: "white",
                  padding: "5px 10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(10px)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove border
                  },
                },
              }}
              sx={{ width: { xs: "100%", sm: 300 } }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              variant="outlined"
              placeholder="New Password"
              type="password"
              InputProps={{
                sx: {
                  borderRadius: "25px",
                  backgroundColor: "white",
                  padding: "5px 10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(10px)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove border
                  },
                },
              }}
              sx={{ width: { xs: "100%", sm: 300 } }}
            />
          </Box>
          <Divider sx={{ my: 3 }} />
          <GlassButton sx={{ color: "#FF6B6B", mb: 2 }}>
            Delete Account
          </GlassButton>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <GlassButton onClick={() => alert("Save changes logic here")}>
            Apply
          </GlassButton>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
