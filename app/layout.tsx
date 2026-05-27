import type { Metadata } from 'next';
import './globals.css';
import EditorTabs from '@/components/EditorTabs';
import StatusBar from '@/components/StatusBar';

export const metadata: Metadata = {
  title: 'Robot Food Farm',
  description:
    'A personal publishing system exploring conversations as infrastructure, governance, and durable computational artifacts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans flex min-h-screen flex-col bg-editor text-ink">
        <EditorTabs />
        <div className="flex-1">{children}</div>
        <StatusBar />
      </body>
    </html>
  );
}
