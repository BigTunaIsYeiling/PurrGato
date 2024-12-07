import { Toaster } from "react-hot-toast";
import "./globals.css";
import SWRProvider from "@/SWRProvider";
import { Roboto } from "next/font/google";
import theme from "@/Theme";
import { ThemeProvider } from "@mui/material";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata = {
  title: "PurrGatto",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <div className="gradient-container">
            <Toaster
              position="top-right"
              reverseOrder={true}
              toastOptions={{
                style: {
                  background: "linear-gradient(180deg, #f8f4f0, #fdecd2)",
                  color: "#000",
                  borderRadius: "10px",
                  fontSize: "12px",
                },
                duration: 1800,
              }}
            />
            <SWRProvider>{children}</SWRProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
