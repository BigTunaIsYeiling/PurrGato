"use client";
import { Box, Typography } from "@mui/material";
import useSWR from "swr";
import LoadingScreen from "@/components/LoadingScreen";
import { Answer } from "@/components/user/Answer";
import { use } from "react";

const Answers = ({ params }) => {
  const { userid } = use(params);

  const {
    data: postData,
    error: postError,
    isLoading: postLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/post/${userid}`);

  const { data: userData, isLoading: userLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/user/`
  );

  if (postLoading || userLoading) return <LoadingScreen />;

  if (!postData || postError) {
    return <Typography variant="h6">Messages not found</Typography>;
  }

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 600, textAlign: "left" }}>
        <Typography sx={{ mt: 4, mb: 2, fontSize: "17px", fontWeight: "500" }}>
          Answers {postData.AllAnswers}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 600 }}>
        {Array.isArray(postData.PostsData) && postData.PostsData.length > 0 ? (
          postData.PostsData.map((post) => (
            <Answer
              key={post.postId}
              post={post}
              userid={userData ? userData.id : null}
              useridPosts={userid}
              avatar={post.avatar}
              username={post.username}
            />
          ))
        ) : (
          <Typography
            variant="body1"
            sx={{ mt: 4, color: "#666" }}
            textAlign="center"
          >
            No answers available.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Answers;
