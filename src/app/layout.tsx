import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Question Practice App',
  description: 'Practice questions with timed sessions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black font-sans">
        {children}
      </body>
    </html>
  );
}