
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
      <body className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
