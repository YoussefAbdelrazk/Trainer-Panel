import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from './components/ui/toaster';
import { VideosProvider } from './context/videos-context';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Catalyst Trainer Dashboard',
  description: 'Manage your workout videos and track your performance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='cursor-custom'>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
      >
        <VideosProvider>
          <main className='relative flex min-h-screen flex-col'>
            {children}
          </main>
          <Toaster />
        </VideosProvider>
      </body>
    </html>
  );
}
