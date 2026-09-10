import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://iglakov.ru'),
  title: {
    default: 'Максим Иглаков — приложения, которыми хочется пользоваться',
    template: '%s — Максим Иглаков',
  },
  description:
    'Портфолио приложений Максима Иглакова. Небольшие цифровые продукты с вниманием к деталям.',
  openGraph: {
    title: 'Максим Иглаков — приложения, которыми хочется пользоваться',
    description: 'Коллекция приложений, идей и цифровых продуктов.',
    url: 'https://iglakov.ru',
    siteName: 'Максим Иглаков',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
