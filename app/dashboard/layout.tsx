import { BarChart, Upload, Video } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen'>
      {/* Sidebar */}
      <aside className='w-64 bg-white border-r border-border'>
        <div className='p-6'>
          <h1 className='text-2xl font-bold text-primary'>Catalyst</h1>
          <p className='text-sm text-muted-foreground'>Trainer Dashboard</p>
        </div>
        <nav className='space-y-1 px-3'>
          <Link
            href='/dashboard/videos'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-muted transition-colors'
          >
            <Video className='h-5 w-5' />
            <span>My Videos</span>
          </Link>
          <Link
            href='/dashboard/upload'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-muted transition-colors'
          >
            <Upload className='h-5 w-5' />
            <span>Upload Video</span>
          </Link>
          <Link
            href='/dashboard/stats'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-muted transition-colors'
          >
            <BarChart className='h-5 w-5' />
            <span>Statistics</span>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className='flex-1'>
        <header className='h-16 border-b border-border bg-white'>
          <div className='flex h-full items-center px-6'>
            <h2 className='text-lg font-semibold'>Welcome back, Trainer!</h2>
          </div>
        </header>
        <main className='p-6'>{children}</main>
      </div>
    </div>
  );
}
