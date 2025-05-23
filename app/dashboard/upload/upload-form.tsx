'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { showErrorToast, showSuccessToast } from '@/lib/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useVideos } from '../../context/videos-context';

const videoFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  duration: z.string().min(1, 'Duration is required'),
  calories: z.string().min(1, 'Calories burned is required'),
  timeline: z.string().min(1, 'Timeline breakdown is required'),
  categories: z.array(z.string()).min(1, 'At least one category is required'),
  music: z.array(z.string()).min(1, 'At least one music track is required'),
});

type VideoFormValues = z.infer<typeof videoFormSchema>;

const categories = [
  'Strength Training',
  'Cardio',
  'Yoga',
  'HIIT',
  'Pilates',
  'Dance',
  'Stretching',
];

const musicTracks = [
  'Upbeat Pop',
  'Electronic',
  'Hip Hop',
  'Rock',
  'Classical',
  'Ambient',
];

export function UploadVideoForm() {
  const [isUploading, setIsUploading] = useState(false);
  const { addVideo } = useVideos();
  const form = useForm<VideoFormValues>({
    resolver: zodResolver(videoFormSchema),
    defaultValues: {
      title: '',
      duration: '',
      calories: '',
      timeline: '',
      categories: [],
      music: [],
    },
  });

  async function onSubmit(data: VideoFormValues) {
    setIsUploading(true);
    try {
      // Add the video to the context
      addVideo({
        title: data.title,
        duration: data.duration,
        calories: data.calories,
        timeline: data.timeline,
        categories: data.categories,
        music: data.music,
      });

      showSuccessToast('Video uploaded successfully');
      // Reset the form
      form.reset();
    } catch (error) {
      showErrorToast('Something went wrong. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
      <div className='space-y-4'>
        <div>
          <Label htmlFor='title'>Video Title</Label>
          <Input
            id='title'
            placeholder='Enter video title'
            {...form.register('title')}
          />
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <Label htmlFor='duration'>Duration (minutes)</Label>
            <Input
              id='duration'
              type='number'
              placeholder='e.g., 30'
              {...form.register('duration')}
            />
          </div>

          <div>
            <Label htmlFor='calories'>Calories Burned</Label>
            <Input
              id='calories'
              type='number'
              placeholder='e.g., 300'
              {...form.register('calories')}
            />
          </div>
        </div>

        <div>
          <Label htmlFor='timeline'>Timeline Breakdown</Label>
          <Textarea
            id='timeline'
            placeholder='e.g., 1-3 mins: Warm-up, 4-7 mins: Arms...'
            {...form.register('timeline')}
          />
        </div>

        <div>
          <Label>Categories</Label>
          <Select
            onValueChange={(value) => {
              const current = form.getValues('categories');
              if (!current.includes(value)) {
                form.setValue('categories', [...current, value]);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder='Select categories' />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className='mt-2 flex flex-wrap gap-2'>
            {form.watch('categories').map((category) => (
              <span
                key={category}
                className='inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary'
              >
                {category}
                <button
                  type='button'
                  className='ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-primary/20'
                  onClick={() => {
                    const current = form.getValues('categories');
                    form.setValue(
                      'categories',
                      current.filter((c) => c !== category)
                    );
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <Label>Music Used</Label>
          <Select
            onValueChange={(value) => {
              const current = form.getValues('music');
              if (!current.includes(value)) {
                form.setValue('music', [...current, value]);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder='Select music tracks' />
            </SelectTrigger>
            <SelectContent>
              {musicTracks.map((track) => (
                <SelectItem key={track} value={track}>
                  {track}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className='mt-2 flex flex-wrap gap-2'>
            {form.watch('music').map((track) => (
              <span
                key={track}
                className='inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-sm font-medium text-secondary'
              >
                {track}
                <button
                  type='button'
                  className='ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-secondary/20'
                  onClick={() => {
                    const current = form.getValues('music');
                    form.setValue(
                      'music',
                      current.filter((m) => m !== track)
                    );
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      <Button type='submit' className='w-full' disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload Video'}
      </Button>
    </form>
  );
}
