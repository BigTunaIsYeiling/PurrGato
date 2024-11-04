import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Box, Typography } from "@mui/material";

const ConfirmDialog = ({ open, onClose, onConfirm, title, message }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: "#f8f4f0", // Background color matching your theme
          boxShadow: "none",
          borderRadius: "16px",
          maxWidth: "400px",
          margin: "auto",
        },
      }}
    >
      <Box sx={{ padding: "20px", textAlign: "center" }}>
        {/* Custom Title */}
        <DialogTitle sx={{ padding: 0, marginBottom: "8px" }}>
          <Typography variant="h6" fontWeight="bold" color="#333">
            {title}
          </Typography>
        </DialogTitle>
        
        {/* Custom Message */}
        <DialogContent sx={{ padding: 0, marginBottom: "20px" }}>
          <Typography variant="body1" color="#666">
            {message}
          </Typography>
        </DialogContent>

        {/* Custom Actions */}
        <DialogActions sx={{ justifyContent: "center", padding: 0 }}>
          <Button
            onClick={onClose}
            sx={{
              backgroundColor: "#fdecd2",
              color: "#333",
              borderRadius: "12px",
              padding: "8px 20px",
              fontWeight: "bold",
              marginRight: "10px",
              "&:hover": {
                backgroundColor: "#fddbb2",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            sx={{
              backgroundColor: "#fdab42",
              color: "#fff",
              borderRadius: "12px",
              padding: "8px 20px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#fd9b22",
              },
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ConfirmDialog;
