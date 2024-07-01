import React from "react";
import { ThemeProvider } from "./ThemeContext";

import Router from "./Router";
import NewsArticle from "./pages/news_article";

import Navbar from "./navbar";
import Footer from "./footer";

import "./globals.css";
import { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

const font = Noto_Sans({ weight: ["400"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "A2I2 @ Purdue",
  description: "Assured Autonomy Innovation Institute (A2I2) @ Purdue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <body className={font.className}>
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <Router>
            {children}
          </Router>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}