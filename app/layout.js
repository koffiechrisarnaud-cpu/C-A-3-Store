import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albert = Albert_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-albert" });

export const metadata = {
  title: "C-A 3 Store – ebooks et formations",
  description: "Tous mes ebooks et formations au même endroit : choisis une boutique et achète en quelques clics.",
};
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={albert.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
