'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useVideos } from '../../context/videos-context';

const statusColors = {
  approved: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  rejected: 'bg-red-100 text-red-800',
};

export function VideoTable() {
  const { videos, incrementViews } = useVideos();
  const router = useRouter();

  return (
    <div className='space-y-4'>
      {/* Mobile View */}
      <div className='space-y-4 lg:hidden'>
        {videos.map((video) => (
          <div
            key={video.id}
            className='rounded-lg border bg-card p-4 shadow-sm'
          >
            <div className='flex items-start justify-between'>
              <div className='space-y-1'>
                <h3 className='font-medium'>{video.title}</h3>
                <Badge
                  variant='secondary'
                  className={
                    statusColors[video.status as keyof typeof statusColors]
                  }
                >
                  {video.status.charAt(0).toUpperCase() + video.status.slice(1)}
                </Badge>
              </div>
              <div className='flex gap-2'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='hover:bg-muted'
                  onClick={() => incrementViews(video.id)}
                >
                  <Eye className='h-4 w-4' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='hover:bg-muted'
                  onClick={() =>
                    router.push(`/dashboard/videos/edit/${video.id}`)
                  }
                >
                  <Edit className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground'>
              <div>
                <span className='font-medium'>Views:</span>{' '}
                {video.views.toLocaleString()}
              </div>
              <div>
                <span className='font-medium'>Status:</span>{' '}
                {video.rejectionReason || '-'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className='hidden lg:block'>
        <div className='rounded-md border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Rejection Reason</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videos.map((video) => (
                <TableRow key={video.id}>
                  <TableCell className='font-medium'>{video.title}</TableCell>
                  <TableCell>
                    <Badge
                      variant='secondary'
                      className={
                        statusColors[video.status as keyof typeof statusColors]
                      }
                    >
                      {video.status.charAt(0).toUpperCase() +
                        video.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{video.views.toLocaleString()}</TableCell>
                  <TableCell>{video.rejectionReason || '-'}</TableCell>
                  <TableCell className='text-right'>
                    <div className='flex justify-end gap-2'>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='hover:bg-muted'
                        onClick={() => incrementViews(video.id)}
                      >
                        <Eye className='h-4 w-4' />
                      </Button>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='hover:bg-muted'
                        onClick={() =>
                          router.push(`/dashboard/videos/edit/${video.id}`)
                        }
                      >
                        <Edit className='h-4 w-4' />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
