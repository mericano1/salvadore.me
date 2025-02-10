import { Inter } from "next/font/google";
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes'
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Andrew Salvadore - Technology Leadership Consultant',
  description: 'Helping organizations navigate digital transformation through Agile methodologies, DevOps practices, and AI integration.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white`}>
        <ThemeProvider attribute="class">
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 