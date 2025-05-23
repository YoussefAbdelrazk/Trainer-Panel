import { UploadVideoForm } from './upload-form';

export default function UploadPage() {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-foreground'>Upload New Video</h1>
        <p className='text-muted-foreground mt-2'>
          Share your workout expertise with the Catalyst community
        </p>
      </div>
      <UploadVideoForm />
    </div>
  );
}
