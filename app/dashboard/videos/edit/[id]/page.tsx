import { EditVideoForm } from '../../edit-form';

export default function EditVideoPage({ params }: { params: { id: string } }) {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-foreground'>Edit Video</h1>
        <p className='text-muted-foreground mt-2'>
          Update your video information
        </p>
      </div>
      <EditVideoForm videoId={params.id} />
    </div>
  );
}
