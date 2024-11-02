"use client";
import { SubAnswer } from "@/components/user/SubAnswer";
import { Box, Typography } from "@mui/material";
import { use } from "react";
import useSWR from "swr";
export default function PostOnePosts({ params }) {
  const { userid, postid } = use(params);
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/post/p/${postid}`);

  const { data: userData, isLoading: userLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/user/`
  );
  if (isLoading || userLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Box sx={{ width: "100%", maxWidth: 600 }}>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <SubAnswer
            key={post.postId}
            post={post}
            avatar={post.avatar}
            username={post.username}
            userid={userData ? userData.id : null}
            useridPosts={userid}
            isSubAnswer={post.isSubAnswer}
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
