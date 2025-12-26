import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ASMRStaticBackground from "@/components/ui/asmr-background";

export const metadata: Metadata = {
  title: "Shabbir - Full Stack Developer",
  description: "Modern portfolio showcasing my work as a full stack developer",
  keywords: ["developer", "portfolio", "web development", "full stack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/png" href="/favicon.ico" />
      </head>
      <body className="antialiased relative">
        <ASMRStaticBackground />
        <div className="relative z-10">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
