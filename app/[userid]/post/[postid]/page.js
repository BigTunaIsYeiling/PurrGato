"use client";
import { SubAnswer } from "@/components/user/SubAnswer";
import { Box, Typography } from "@mui/material";
import { use } from "react";
import useSWR from "swr";
export default function PostOnePosts({ params }) {
  const { userid, postid } = use(params);
  const {
    data,
    error: userError,
    isLoading: userDataLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/user/one/${userid}`);
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/post/p/${postid}`);
  const { data: userData, isLoading: userLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/user/`
  );
  if (isLoading || userLoading || userDataLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <Box my={2}>Posts Not Found</Box>;
  }
  return (
    <Box sx={{ width: "100%", maxWidth: 600 }}>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <SubAnswer
            key={post.postId}
            post={post}
            avatar={data.avatar}
            username={data.username}
            userid={userData ? userData.id : null}
            useridPosts={userid}
            isSubAnswer={post.isSubAnswer}
            postParam={postid}
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
  );
}