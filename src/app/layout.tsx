import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "./navbar";
import Footer from "./footer";
import Contact from "./contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} px-4 sm:px-0 antialiased overflow-x-hidden`}>
        <NavBar />
        {children}
        <Contact access_key={process.env.WEBFORMS_API_KEY} />
        <Footer />
      </body>
    </html>
  );
}
