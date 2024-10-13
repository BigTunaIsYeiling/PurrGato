import { Box } from "@mui/material";
import Notification from "./Notification";

const NotificationList = () => {
  const notifications = [
    {
      type: "like",
      content: "Alice liked your answer on 'How to learn React?'",
      timestamp: "2024-10-12 11:00 AM",
    },
    {
      type: "reply",
      content: "Bob replied to your answer on 'Best programming practices'",
      timestamp: "2024-10-11 09:30 AM",
    },
    {
      type: "like",
      content: "Charlie liked your question on 'React vs Angular'",
      timestamp: "2024-10-10 10:45 AM",
    },
    {
      type: "reply",
      content: "David replied to your question on 'JavaScript frameworks'",
      timestamp: "2024-10-09 08:20 AM",
    },
    {
      type: "reply",
      content: "Eve liked your answer on 'Node.js vs Python'",
      timestamp: "2024-10-08 12:15 PM",
    },
  ];

  return (
    <Box>
      {notifications.map((notif, index) => (
        <Notification key={index} notification={notif} />
      ))}
    </Box>
  );
};

export default NotificationList;
