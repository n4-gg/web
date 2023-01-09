import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Inter } from "@next/font/google";
import clsx from "clsx";
import { AnalyticsWrapper } from "@/components/Analytics";

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
      <body className="bg-glitch-pattern text-off-white">
        <Header />
        {children}
        <Footer />

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
