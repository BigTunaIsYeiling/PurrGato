"use client";
import { use } from "react";
import useSWR from "swr";
export default function PostOnePosts({ params }) {
  const { userid, postid } = use(params);
  const { data: posts, error,isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/post/p/${postid}`
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(posts);
  return <div>page</div>;
}
