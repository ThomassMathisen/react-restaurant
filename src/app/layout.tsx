import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";
import Footer from "@/components/footer";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurant Page",
  description: "Tasty and delicious food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <Notification />
            <Navbar />
            {children}
            <Footer />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
