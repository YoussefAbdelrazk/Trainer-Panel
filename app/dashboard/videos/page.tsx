import { VideoTable } from './video-table';

export default function VideosPage() {
  return (
    <div>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-foreground'>My Videos</h1>
        <p className='text-muted-foreground mt-2'>
          Manage and track your uploaded workout videos
        </p>
      </div>
      <VideoTable />
    </div>
  );
}
