import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Nude'n Satin Cattery",
  description: "Canadian sphynx cattery website",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}