import MessageList from "@/components/Messages/MessagesList";
import { Box, Typography, Container } from "@mui/material";
const MessagesPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, color: "#333", fontWeight: 600 }}>
          Inbox
        </Typography>
        <MessageList />
      </Box>
    </Container>
  );
};

export default MessagesPage;
