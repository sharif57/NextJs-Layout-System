// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "../globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black `}
//       >
//         <Navbar></Navbar>
//         {children}
//         <Footer></Footer>
//       </body>
//     </html>
//   );
// }


// app/layout.tsx

import React from 'react';
import '../globals.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex flex-col text-black">
        <Navbar></Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
