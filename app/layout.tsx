import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Cap Cruncher",
  description: "Hockey player contract and cap data",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            {/* Banner */}
            <div className="w-full bg-gradient-to-r from-[#0a1628] via-[#0d2257] to-[#0a1628] border-b border-white/10 py-8 px-6 flex flex-col items-center text-center gap-3">
              <h1 className="text-4xl font-extrabold text-white tracking-tight">Cap Cruncher</h1>
              <p className="text-white/70 text-lg max-w-xl">
                PWHL player contracts, cap hits, and roster data — all in one place.
              </p>
            </div>
            {/* Body */}
            <div className="flex flex-1">
              {children}
            </div>
            {/* Footer */}
            <footer className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground">
              Cap Cruncher © {new Date().getFullYear()}
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
