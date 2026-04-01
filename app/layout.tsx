import type { Metadata } from "next"; 
import { Geist, Geist_Mono } from "next/font/google"; 
import "./globals.css"; 

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], }); 
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Cee-lo",
  description: "Let's play Cee-lo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
