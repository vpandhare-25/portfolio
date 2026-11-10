import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Archivo is a grotesk with a width axis: wide and heavy for the name and headings,
// normal width for reading. IBM Plex Mono is for small labels and technical details.
const sans = Archivo({ variable: "--nf-sans", subsets: ["latin"], axes: ["wdth"] });
const mono = IBM_Plex_Mono({ variable: "--nf-mono", subsets: ["latin"], weight: ["400", "500"] });

const title = "Vivek Pandhare · Software Engineer";
const description =
  "Computer Science at Michigan State University. Backend development, systems programming and applied AI.";

export const metadata: Metadata = {
  // Vercel sets VERCEL_PROJECT_PRODUCTION_URL automatically, so share previews get the right link.
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title,
  description,
  authors: [{ name: "Vivek Pandhare" }],
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

// Runs before the page paints, so a visitor who chose dark mode never sees a light flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} antialiased`} suppressHydrationWarning>
      <body>
        <Script id="theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
