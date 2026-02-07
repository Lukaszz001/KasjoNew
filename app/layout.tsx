import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // 👈 DODANE
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---------------- Poprawne metadata ----------------
export const metadata: Metadata = {
  title: "Don Kasjo - Bonusy, Streamy, Społeczność",
  description: "Bonusy kasynowe, streamy i społeczność Don Kasjo",
  icons: {
    icon: "/favicon2.png",
    apple: "/favicon2.png",
    shortcut: "/favicon2.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* ✅ Plausible Analytics */}
        <Script
          async
          src="https://plausible.io/js/pa-Wa7vZhSms32ee92SpwpU9.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)};
            plausible.init();
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
