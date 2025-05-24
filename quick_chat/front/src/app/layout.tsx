import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Session } from "inspector/promises";
import { SessionProvider } from "next-auth/react";

const fontsans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Quick-Chat Application",
  description: "A best way to communicate to your closed ones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider>
       <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontsans.variable
        )}
      >
        {children}
      </body>
      </SessionProvider>
     
    </html>
  );
}
