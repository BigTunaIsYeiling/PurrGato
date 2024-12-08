"use client";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import { SubAnswer } from "@/components/user/SubAnswer";
import styled from "@emotion/styled";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { use } from "react";
import useSWR from "swr";
const GlassButton = styled(Button)({
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "25px",
  color: "black",
  padding: "15px",
  textTransform: "none",
  fontSize: "14px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.3)",
  },
  marginTop: "10px",
  marginBottom: "10px",
});

export default function PostOnePosts({ params }) {
  const { userid, postid } = use(params);
  const router = useRouter();
  const {
    data,
    error: userError,
    isLoading: userDataLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/user/one/${userid}`);
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/post/${userid}/p/${postid}`);
  const { data: userData, isLoading: userLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/user/`
  );
  if (isLoading || userLoading || userDataLoading) {
    return <PostSkeleton />;
  }
  if (error) {
    return <Box my={2}>{error.info?.message}</Box>;
  }
  return (
    <Box my={2} sx={{ width: "100%", maxWidth: 600 }}>
      <Divider />
      <Box sx={{ width: "100%", maxWidth: 600 }} my={1}>
        <GlassButton
          sx={{ width: "100%" }}
          onClick={() => {
            router.push(`/${userid}`);
          }}
        >
          View {data.username + "'s"} All Answers
        </GlassButton>
      </Box>
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
    </Box>
  );
}
