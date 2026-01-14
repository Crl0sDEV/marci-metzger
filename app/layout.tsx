import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marci Metzger | Luxury Real Estate",
  description: "Premier real estate services in Pahrump.",
  icons: {
    icon: "/images/marci.png",
    apple: "/images/marci.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} antialiased bg-white text-gray-800`}>
        {children}
      </body>
    </html>
  );
}