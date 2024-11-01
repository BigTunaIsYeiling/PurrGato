"use client";
import LoadingScreen from "@/components/LoadingScreen";
import MessageList from "@/components/Messages/MessagesList";
import UserLayout from "@/components/UserLayout";
import { Box, Typography, Container } from "@mui/material";
import useSWR from "swr";
const MessagesPage = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/message`
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <LoadingScreen />;
  return (
    <UserLayout>
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            sx={{ mb: 2, color: "#333", fontWeight: 600 }}
          >
            Inbox
          </Typography>
          <MessageList data={data} />
        </Box>
      </Container>
    </UserLayout>
  );
};

export default MessagesPage;
