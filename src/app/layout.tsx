import type { Metadata } from "next";
import { newsreader, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcello — The Digital Archivist",
  description: "Portfolio of Marcello Pimentel Zanandrea, Front-End Developer specializing in React, TypeScript, and Next.js.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
