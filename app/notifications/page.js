"use client";
import LoadingScreen from "@/components/LoadingScreen";
import NotificationList from "@/components/Notifications/NotificationList";
import UserLayout from "@/components/UserLayout";
import { Box, Typography, Container } from "@mui/material";
import useSWR from "swr";
const NotificationsPage = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/note`
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <LoadingScreen />;
  console.log(data);
  return (
    <UserLayout>
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            sx={{ mb: 2, color: "#333", fontWeight: 600 }}
          >
            Notifications
          </Typography>
          <NotificationList data={data} />
        </Box>
      </Container>
    </UserLayout>
  );
};

export default NotificationsPage;
