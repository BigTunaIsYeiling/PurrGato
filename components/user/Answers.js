"use client";
import { Box, Typography } from "@mui/material";
import { Answer } from "./Answer";
import { useState } from "react";
import LoadingScreen from "../LoadingScreen";
import useSWR from "swr";
const Answers = ({ userId }) => {
  const [answerData, setAnswersData] = useState([
    {
      date: "2023-08-01",
      ask: "What is your favorite hobby?",
      answer: "I love painting and exploring nature.",
      userAvatar: "https://i.pravatar.cc/150?img=11",
      userName: "Anonymous",
      likes: 15,
    },
    {
      date: "2023-07-15",
      ask: "How do you manage your time?",
      answer: "I use time-blocking and prioritize my tasks daily.",
      userAvatar: "https://i.pravatar.cc/150?img=12",
      userName: "Anonymous",
      likes: 8,
    },
    {
      date: "2023-08-01",
      ask: "What is your favorite hobby?",
      answer: "I love painting and exploring nature.",
      userAvatar: "https://i.pravatar.cc/150?img=11",
      userName: "Anonymous",
      likes: 15,
    },
    {
      date: "2023-07-15",
      ask: "How do you manage your time?",
      answer: "I use time-blocking and prioritize my tasks daily.",
      userAvatar: "https://i.pravatar.cc/150?img=12",
      userName: "Anonymous",
      likes: 8,
    },
  ]);
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
          Answers / 18
        </Typography>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 600 }}>
        {Array.isArray(answerData) && answerData.length > 0 ? (
          answerData.map((answer, index) => (
            <Answer key={index} answer={answer} setAnswers={setAnswersData} />
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
