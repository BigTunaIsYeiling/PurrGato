import styled from "@emotion/styled";
import { Button } from "@mui/material";
const GlassButton = styled(Button)({
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "10px",
  color: "black",
  padding: "5px 10px",
  textTransform: "none",
  fontSize: "14px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.3)",
  },
});
export default function ReplyComponent() {
  return (
    <>
      <GlassButton>Reply</GlassButton>
    </>
  );
}
