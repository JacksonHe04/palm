import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Serif_SC } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "欢迎申请 PALM 实验室！",
  description: "PAttern Learning and Mining(PALM) Lab - 东南大学计算机科学与工程学院",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`min-h-full flex flex-col ${jetbrainsMono.variable} ${notoSerifSC.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}