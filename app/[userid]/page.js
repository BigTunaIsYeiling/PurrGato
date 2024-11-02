"use client";
import { Box, Typography } from "@mui/material";
import useSWR from "swr";
import { use } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { Answer } from "@/components/user/Answer";
const Answers = ({ params }) => {
  const { userid } = use(params);
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/post/${userid}`
  );
  const {
    data: userdata,
    error: guest,
    isLoading: loadpage,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/user/`);
  if (isLoading) return <LoadingScreen />;
  if (!data || error) {
    return <Typography variant="h6">Messages not found</Typography>;
  }
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 600, textAlign: "left" }}>
        <Typography sx={{ mt: 4, mb: 2, fontSize: "17px", fontWeight: "500" }}>
          Answers {data.AllAnswers}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 600 }}>
        {Array.isArray(data.PostsData) && data.PostsData.length > 0 ? (
          data.PostsData.map((post, index) => (
            <Answer
              key={post.postId}
              post={post}
              userid={userdata ? userdata.id : null}
              useridPosts={userid}
              avatar={post.avatar}
              username={post.username}
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
