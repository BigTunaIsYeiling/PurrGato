import { Box } from "@mui/material";
import Message from "./Message";

const MessageList = () => {
  const messages = [
    { content: "Hello, how are you?", timestamp: "2024-10-12 10:00 AM" },
    { content: "Can we meet tomorrow?", timestamp: "2024-10-11 09:30 AM" },
    { content: "Yes, let's do it!", timestamp: "2024-10-10 10:45 AM" },
    {
      content: "I'll be there in 5 minutes.",
      timestamp: "2024-10-09 08:20 AM",
    },
    { content: "See you then!", timestamp: "2024-10-08 12:15 PM" },
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
