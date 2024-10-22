import { Inter } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WEBSOC.AI",
  description: "AI FIRST AI POWERED",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WV3M9B5"/>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-ZYWGCJPZC5" />
    </html>
  );
}
