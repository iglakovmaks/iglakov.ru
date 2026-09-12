import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://iglakov.ru'),
  title: {
    default: 'iglakovmaks — digital products',
    template: '%s — iglakovmaks',
  },
  description:
    'Портфолио iglakovmaks: приложения, интерфейсы и цифровые продукты.',
  openGraph: {
    title: 'iglakovmaks — digital products',
    description: 'Коллекция приложений, идей и цифровых продуктов.',
    url: 'https://iglakov.ru',
    siteName: 'iglakovmaks',
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
