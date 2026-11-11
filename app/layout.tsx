import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Auraha Safi Explorers — Tanzania's Premier Travel Experience",
  description: "Expertly crafted safaris, Kilimanjaro treks, and Zanzibar escapes by Arusha locals who know every trail and sunrise.",
  metadataBase: new URL("https://aurahasafi.com"),
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Auraha Safi Explorers — Tanzania's Premier Travel Experience",
    description: "Expertly crafted safaris, Kilimanjaro treks, and Zanzibar escapes by Arusha locals who know every trail and sunrise.",
    url: "https://aurahasafi.com",
    siteName: "Auraha Safi Explorers",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Auraha Safi Explorers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auraha Safi Explorers — Tanzania's Premier Travel Experience",
    description: "Expertly crafted safaris, Kilimanjaro treks, and Zanzibar escapes by Arusha locals who know every trail and sunrise.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="light" style={{ colorScheme: "light" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-stone-900 font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
