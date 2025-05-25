import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SessionProvider from "@/providers/SessionProvider"; // your custom client component
import {Toaster} from "@/components/ui/sonner";
const fontsans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Quick-Chat Application",
  description: "A best way to communicate to your closed ones",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions); // Server-side session

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontsans.variable
        )}
      >
        <SessionProvider session={session}>
          <Toaster richColors duration={100000} />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
