import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../_components/Header";
import Socials from "../_components/Socials";
import CookieBanner from "../_components/CookieBanner";
import { getDictionary } from "@/lib/getDictionaries";
import Analytics from "../_components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SUPPORTED_LOCALES = ["en", "es", "gl"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const rawLocale = resolvedParams.locale;
  const isSupported = SUPPORTED_LOCALES.includes(rawLocale as Locale);
  const locale: Locale = isSupported ? (rawLocale as Locale) : "en";

  const dict = await getDictionary(locale);

  return {
    title: dict.SEO.title,
    description: dict.SEO.description,
    openGraph: {
      title: dict.SEO.title,
      description: dict.SEO.description,
      url: `https://dleitebakery.com/${locale}`,
      siteName: "DLeite Bakery",
      images: [
        {
          url: "/tarta3.jpg",
          width: 1200,
          height: 630,
          alt: dict.SEO.imageAlt,
        },
      ],
      locale: locale,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const rawLocale = resolvedParams.locale;
  const isSupported = SUPPORTED_LOCALES.includes(rawLocale as Locale);
  const locale: Locale = isSupported ? (rawLocale as Locale) : "en";
  const dict = await getDictionary(locale);
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}  antialiased overflow-x-clip max-w-full  `}
    >
      <body className="flex flex-col  h-dvh w-full max-w-full overflow-hidden ">
        <Header dict={dict} locale={locale} />
        <Analytics />
        <main className="relative flex-1     justify-center items-center overflow-y-auto w-screen h-screen">
          {/* className=" flex flex-col justify-center items-center" */}
          {children}
          <CookieBanner dict={dict} />
          <Socials dict={dict} />
        </main>
      </body>
    </html>
  );
}
