import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Suspense } from "react";
import { Toaster } from "sonner";
import { WelcomeToast } from "./welcome-toast";

export const metadata: Metadata = {
  title: "Next AI News",
  description:
    "A version of Hacker News where the stories and comments are 100% generated by LLMs (mistral)",
  metadataBase: new URL("https://next-ai-news.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          {children}

          <Toaster closeButton />
          <WelcomeToast />
        </Suspense>
      </body>
    </html>
  );
}
