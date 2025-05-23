import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { VideosProvider } from './context/videos-context';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Catalyst - Trainer Dashboard',
  description: 'Manage your training videos and track your progress',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <VideosProvider>
            <main className='relative flex min-h-screen flex-col'>
              {children}
            </main>
            <Toaster position='top-right' />
          </VideosProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
