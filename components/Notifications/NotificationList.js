import { Box } from "@mui/material";
import Notification from "./Notification";

const NotificationList = ({ data }) => {
  return (
    <Box>
      {data.map((notif, index) => (
        <Notification key={notif.id} notification={notif} />
      ))}
    </Box>
  );
};

export default NotificationList;
