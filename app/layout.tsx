import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "СИНЕРГИЯ+ | Логистическая компания Самара | Грузоперевозки",
  description: "Логистическая компания Самара. Грузоперевозки по РФ и СНГ. Перевозки Москва Самара, СПб Самара, Самара Казань. Договор, контроль, сроки — без сюрпризов.",
  keywords: "грузоперевозки Самара, логистическая компания Самара, экспедирование Самара, перевозки Москва Самара, перевозки СПб Самара, перевозки Самара Казань",
  openGraph: {
    title: "СИНЕРГИЯ+ | Логистическая компания Самара",
    description: "Логистическая компания Самара. Грузоперевозки по РФ и СНГ. Договор, контроль, сроки — без сюрпризов.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ООО «Синергия Плюс»',
    legalName: 'ООО «Синергия Плюс»',
    description: 'Логистическая компания Самара. Грузоперевозки по РФ и СНГ.',
    url: 'https://sinergiaplus1.ru',
    telephone: '+79278996662',
    email: 'info@sinergiaplus1.ru',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Просека 5-я, д. 121, кв. 131',
      addressLocality: 'Самара',
      postalCode: '443124',
      addressRegion: 'Самарская область',
      addressCountry: 'RU',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Россия',
    },
    priceRange: '$$',
    taxID: '6316267675',
  };

  return (
    <html lang="ru">
      <head>
        {/* Яндекс.Вебмастер верификация: раскомментируйте после получения мета-тега */}
        {/* <meta name="yandex-verification" content="YOUR_VERIFICATION_CODE" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
