import { EditVideoForm } from '../../edit-form';

export default async function EditVideoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-foreground'>Edit Video</h1>
        <p className='text-muted-foreground mt-2'>
          Update your video information
        </p>
      </div>
      <EditVideoForm videoId={id} />
    </div>
  );
}
