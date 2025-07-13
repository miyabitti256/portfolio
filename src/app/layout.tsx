import type { Metadata } from "next";
import { Geist, Geist_Mono, Zen_Maru_Gothic } from "next/font/google";
import { PageTransition } from "@/components/animations/PageTransition";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "フロントエンドエンジニア志望のポートフォリオ",
  description: "JavaScript/TypeScript/React/Next.jsを学習中のフロントエンドエンジニア志望者のポートフォリオサイトです。Discord Bot開発やフルスタック開発の経験があります。",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${zenMaruGothic.variable} antialiased`}
        suppressContentEditableWarning
      >
        <PageTransition>
          {children}
        </PageTransition>
        {modal}
      </body>
      <GoogleAnalytics gaId="G-8V7BBV544Y" />
    </html>
  );
}
