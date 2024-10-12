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
    // Add more notifications here
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
