import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { tourConfig } from "@/lib/tour";
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
  title: tourConfig.title,
  description: tourConfig.description,
  icons: {
    icon: "/tour/misc/icon192.png",
    apple: "/tour/misc/icon180.png",
  },
  appleWebApp: { capable: true, title: tourConfig.title },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
