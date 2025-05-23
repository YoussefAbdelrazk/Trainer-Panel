'use client';

import { BarChart, Menu, Upload, Video, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from '../components/theme-toggle';
import { Button } from '../components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      href: '/dashboard/videos',
      icon: Video,
      label: 'My Videos',
    },
    {
      href: '/dashboard/upload',
      icon: Upload,
      label: 'Upload Video',
    },
    {
      href: '/dashboard/statistics',
      icon: BarChart,
      label: 'Statistics',
    },
  ];

  return (
    <div className='flex min-h-screen flex-col lg:flex-row'>
      {/* Mobile Header */}
      <header className='flex h-16 items-center justify-between border-b border-border bg-background px-4 lg:hidden'>
        <h1 className='text-xl font-bold text-primary'>Catalyst</h1>
        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6' />
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-[240px] p-0'>
              <div className='flex h-16 items-center justify-between border-b px-4'>
                <h1 className='text-xl font-bold text-primary'>Catalyst</h1>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setIsOpen(false)}
                >
                  <X className='h-6 w-6' />
                </Button>
              </div>
              <nav className='space-y-1 p-4'>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-muted transition-colors'
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className='h-5 w-5' />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className='hidden w-64 border-r border-border bg-background lg:block'>
        <div className='p-6'>
          <h1 className='text-2xl font-bold text-primary'>Catalyst</h1>
          <p className='text-sm text-muted-foreground'>Trainer Dashboard</p>
        </div>
        <nav className='space-y-1 px-3'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-foreground hover:bg-muted transition-colors'
            >
              <item.icon className='h-5 w-5' />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className='flex-1'>
        <header className='hidden h-16 border-b border-border bg-background lg:block'>
          <div className='flex h-full items-center justify-between px-6'>
            <h2 className='text-lg font-semibold'>Welcome back, Trainer!</h2>
            <ThemeToggle />
          </div>
        </header>
        <main className='p-4 lg:p-6'>{children}</main>
      </div>
    </div>
  );
}
