import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Inter } from "@next/font/google";
import { AnalyticsWrapper } from "@/components/Analytics";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(inter.className, "dark scroll-smooth antialiased")}
    >
      <body className="flex min-h-screen flex-col bg-glitch-pattern text-off-white">
        <Header />
        {children}
        <Footer />

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
