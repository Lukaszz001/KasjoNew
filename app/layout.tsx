import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Don Kasjo - Bonusy, Streamy, Społeczność",
  description: "Bonusy kasynowe, streamy i społeczność Don Kasjo",
  icons: {
    icon: "/favicon2.png",
    apple: "/favicon2.png",
    shortcut: "/favicon2.png",
  },
  metadataBase: new URL("https://szybkie-wyplaty.vercel.app"),
  openGraph: {
    title: "Don Kasjo - Bonusy, Streamy, Społeczność",
    description: "Bonusy kasynowe, streamy i społeczność Don Kasjo",
    url: "https://szybkie-wyplaty.vercel.app",
    siteName: "Don Kasjo",
    images: [
      {
        url: "https://szybkie-wyplaty.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Don Kasjo - Bonusy, Streamy, Społeczność",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Don Kasjo - Bonusy, Streamy, Społeczność",
    description: "Bonusy kasynowe, streamy i społeczność Don Kasjo",
    images: ["https://szybkie-wyplaty.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        {/* ✅ Plausible Analytics - nowa wersja */}
        <Script
          async
          defer
          data-domain="szybkie-wyplaty.vercel.app"
          src="https://plausible.io/js/plausible.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
