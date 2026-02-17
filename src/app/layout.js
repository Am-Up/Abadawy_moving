import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers.jsx";
import Context from "./Context.jsx";
import GAListener from "@/Components/GAListener.jsx";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Context>
            {/* Google Analytics */}
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=G-B229K9QPY2`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-B229K9QPY2', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>

            <GAListener /> {/* Component لتتبع صفحات Next.js */}
            {children}
          </Context>
        </Providers>
      </body>
    </html>
  );
}
