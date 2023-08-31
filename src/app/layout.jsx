"use client";
import NavBar from "@component/modules/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import MyStoreProvider from "@component/provider/my-store-provider";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "My Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MyStoreProvider>
          <NavBar />
          {children}
        </MyStoreProvider>
      </body>
    </html>
  );
}
