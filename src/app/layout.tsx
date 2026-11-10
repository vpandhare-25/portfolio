import type { Metadata, Viewport } from "next";
import { Allura, Tinos } from "next/font/google";
import "./globals.css";

// Tinos matches Times New Roman, so the serif looks the same on phones without Times.
const serif = Tinos({ variable: "--nf-serif", subsets: ["latin"], weight: ["400", "700"] });
// Handwritten font for the "vp" monogram in the corner.
const script = Allura({ variable: "--nf-script", subsets: ["latin"], weight: "400" });

const title = "Vivek Pandhare";
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e3eee7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1915" },
  ],
};

// Runs before the page paints, so a visitor who chose dark mode never sees a light flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${script.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
