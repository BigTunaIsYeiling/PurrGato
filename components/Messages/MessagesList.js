import { Box } from "@mui/material";
import Message from "./Message";

const MessageList = () => {
  const messages = [
    { content: "Hello, how are you?", timestamp: "2024-10-12 10:00 AM" },
    { content: "Can we meet tomorrow?", timestamp: "2024-10-11 09:30 AM" },
    // Add more messages here
  ];

  return (
    <Box>
      {messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </Box>
  );
};

export default MessageList;
