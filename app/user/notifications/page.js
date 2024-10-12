import NotificationList from "@/components/Notifications/NotificationList";
import { Box, Typography, Container } from "@mui/material";

const NotificationsPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, color: "#333", fontWeight: 600 }}>
          Notifications
        </Typography>
        <NotificationList />
      </Box>
    </Container>
  );
};

export default NotificationsPage;
