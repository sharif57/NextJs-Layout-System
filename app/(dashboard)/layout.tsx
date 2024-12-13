// app/layout.tsx

import React from 'react';
import '../globals.css';
// import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex flex-col">
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
