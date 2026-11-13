import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://iglakov.ru'),
  title: {
    default: 'iglakovmaks — digital products',
    template: '%s — iglakovmaks',
  },
  description: 'The portfolio of iglakovmaks, an independent developer building apps for macOS and Windows.',
  openGraph: {
    title: 'iglakovmaks — digital products',
    description: 'Apps, ideas, and digital products by iglakovmaks.',
    url: 'https://iglakov.ru',
    siteName: 'iglakovmaks',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
