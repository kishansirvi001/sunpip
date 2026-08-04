import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/lib/constants";
import { organizationSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Solar EPC Company`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  keywords: ["solar EPC Rajasthan", "rooftop solar Rajasthan", "residential rooftop solar", "solar subsidy Rajasthan", "net metering Rajasthan", "solar installer Rajasthan"],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | Solar EPC Company`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "SUNPIP SOLUTIONS LLP solar EPC Rajasthan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Solar EPC Company`,
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
