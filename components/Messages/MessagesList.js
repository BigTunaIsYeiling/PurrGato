import { Box } from "@mui/material";
import Message from "./Message";

const MessageList = ({ data }) => {
  return (
    <Box>
      {data.map((msg, index) => (
        <Message key={msg._id} message={msg.content} date={msg.createdAt} />
      ))}
    </Box>
  );
};

export default MessageList;
