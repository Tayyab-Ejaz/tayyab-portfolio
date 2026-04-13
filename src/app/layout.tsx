import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tayyab | Full-Stack Engineer Portfolio",
  description:
    "Tech-inspired portfolio for Tayyab, a full-stack engineer building SaaS, healthcare, analytics, and AI-adjacent products.",
  openGraph: {
    title: "Tayyab | Full-Stack Engineer Portfolio",
    description:
      "Explore selected projects, engineering capabilities, and product-focused full-stack work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[var(--color-bg)] font-sans text-[var(--color-text)] antialiased">
        {children}
      </body>
    </html>
  );
}
