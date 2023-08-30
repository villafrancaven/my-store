"use client"
import "./globals.css";
import { Poppins } from "next/font/google";
import theme from "@component/styles/theme";
import { ThemeProvider } from "@mui/material";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Store",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
