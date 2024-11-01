"use client";
import { Box, Typography } from "@mui/material";
import { Answer } from "./Answer";
import LoadingScreen from "../LoadingScreen";
import useSWR from "swr";
const Answers = ({ userId, avatar, username, currentUser }) => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/post/${userId}`
  );
  if (isLoading) return <LoadingScreen />;
  if (!data || error) {
    return <Typography variant="h6">Messages not found</Typography>;
  }
  console.log(data);
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 600, textAlign: "left" }}>
        <Typography sx={{ mt: 4, mb: 2, fontSize: "17px", fontWeight: "500" }}>
          Answers / {data.length}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 600 }}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((post, index) => (
            <Answer
              key={post.postId}
              post={post}
              avatar={avatar}
              username={username}
              userid={currentUser}
              useridPosts={userId}
            />
          ))
        ) : (
          <Typography
            variant="body1"
            sx={{ mt: 4, color: "#666" }}
            textAlign={"center"}
          >
            No answers available.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Answers;
