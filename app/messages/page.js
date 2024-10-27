import MessageList from "@/components/Messages/MessagesList";
import UserLayout from "@/components/UserLayout";
import { Box, Typography, Container } from "@mui/material";
const MessagesPage = () => {
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
          <MessageList />
        </Box>
      </Container>
    </UserLayout>
  );
};

export default MessagesPage;
