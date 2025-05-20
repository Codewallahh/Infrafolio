import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import AppLayout from '@/components/layout/AppLayout';
import { Toaster } from "@/components/ui/toaster";

// Removed incorrect function calls for GeistSans and GeistMono

export const metadata: Metadata = {
  title: 'Infrafolio - DevOps Portfolio & Dashboard',
  description: 'Personal/Team Projects, Live Infrastructure Metrics, and AI Insights',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-mono antialiased"> {/* Defaulting to mono as per existing setup */}
        <AppLayout>{children}</AppLayout>
        <Toaster />
      </body>
    </html>
  );
}
