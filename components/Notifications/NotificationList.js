"use client";
import { Box } from "@mui/material";
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
      {data.map((notif, index) => (
        <Notification key={notif.id} notification={notif} />
      ))}
    </Box>
  );
};

export default NotificationList;
