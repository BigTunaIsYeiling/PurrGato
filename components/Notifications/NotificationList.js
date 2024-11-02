"use client";
import { Box, Typography } from "@mui/material";
import Notification from "./Notification";
import useSWR, { mutate } from "swr";
const NotificationList = ({ data }) => {
  const { data: notificationsreq, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/note/Read`,
    { revalidateOnFocus: false }
  );
  if (notificationsreq) mutate(`${process.env.NEXT_PUBLIC_API_URL}/user/`);
  return (
    <Box>
      {data.length != 0 ? (
        data.map((notif, index) => (
          <Notification key={notif.id} notification={notif} />
        ))
      ) : (
        <Typography variant="h6">No Notifications For Now</Typography>
      )}
    </Box>
  );
};

export default NotificationList;
