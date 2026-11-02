import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Analytics } from "@/components/layout/Analytics";
import { siteConfig } from "@/lib/constants";
import { organizationSchema, websiteSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Solar Company in Sojat & Pali | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Solar EPC and rooftop solar installation",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `Solar Company in Sojat & Pali | ${siteConfig.name}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SUNPIP SOLUTIONS LLP rooftop solar in Sojat and Pali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Solar Company in Sojat & Pali | ${siteConfig.name}`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <StickyCTA />
        <ScrollToTop />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
