import type { Metadata } from "next";
import "./globals.css";
import {IBM_Plex_Serif, Inter} from "next/font/google";

const iBMPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-ibm-plex-serif'
})
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "my bank",
  description: "application de bank",
  icons:{
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${inter.variable} ${iBMPlexSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
