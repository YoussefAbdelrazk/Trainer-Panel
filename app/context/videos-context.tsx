'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

export type Video = {
  id: string;
  title: string;
  status: 'approved' | 'pending' | 'rejected';
  views: number;
  rejectionReason: string | null;
  duration?: string;
  calories?: string;
  timeline?: string;
  categories?: string[];
  music?: string[];
  createdAt: string;
  viewHistory: { date: string; views: number }[];
};

type VideosContextType = {
  videos: Video[];
  addVideo: (
    video: Omit<
      Video,
      | 'id'
      | 'status'
      | 'views'
      | 'rejectionReason'
      | 'createdAt'
      | 'viewHistory'
    >
  ) => void;
  updateVideoStatus: (
    id: string,
    status: Video['status'],
    rejectionReason?: string
  ) => void;
  incrementViews: (id: string) => void;
  editVideo: (
    id: string,
    videoData: Partial<
      Omit<
        Video,
        | 'id'
        | 'status'
        | 'views'
        | 'rejectionReason'
        | 'createdAt'
        | 'viewHistory'
      >
    >
  ) => void;
  deleteVideo: (id: string) => void;
};

const VideosContext = createContext<VideosContextType | undefined>(undefined);

const STORAGE_KEY = 'catalyst_videos';

export function VideosProvider({ children }: { children: ReactNode }) {
  const [videos, setVideos] = useState<Video[]>([]);

  // Load videos from localStorage on initial render
  useEffect(() => {
    const storedVideos = localStorage.getItem(STORAGE_KEY);
    if (storedVideos) {
      setVideos(JSON.parse(storedVideos));
    }
  }, []);

  // Save videos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
  }, [videos]);

  const addVideo = (
    videoData: Omit<
      Video,
      | 'id'
      | 'status'
      | 'views'
      | 'rejectionReason'
      | 'createdAt'
      | 'viewHistory'
    >
  ) => {
    const newVideo: Video = {
      ...videoData,
      id: Date.now().toString(),
      status: 'pending',
      views: 0,
      rejectionReason: null,
      createdAt: new Date().toISOString(),
      viewHistory: [],
    };
    setVideos((prev) => [...prev, newVideo]);
  };

  const updateVideoStatus = (
    id: string,
    status: Video['status'],
    rejectionReason?: string
  ) => {
    setVideos((prev) =>
      prev.map((video) =>
        video.id === id
          ? { ...video, status, rejectionReason: rejectionReason || null }
          : video
      )
    );
  };

  const incrementViews = (id: string) => {
    const today = new Date().toISOString().split('T')[0];
    setVideos((prev) =>
      prev.map((video) => {
        if (video.id === id) {
          const viewHistory = [...video.viewHistory];
          const todayIndex = viewHistory.findIndex(
            (entry) => entry.date === today
          );

          if (todayIndex >= 0) {
            viewHistory[todayIndex] = {
              ...viewHistory[todayIndex],
              views: viewHistory[todayIndex].views + 1,
            };
          } else {
            viewHistory.push({ date: today, views: 1 });
          }

          return {
            ...video,
            views: video.views + 1,
            viewHistory,
          };
        }
        return video;
      })
    );
  };

  const editVideo = (
    id: string,
    videoData: Partial<
      Omit<
        Video,
        | 'id'
        | 'status'
        | 'views'
        | 'rejectionReason'
        | 'createdAt'
        | 'viewHistory'
      >
    >
  ) => {
    setVideos((prev) =>
      prev.map((video) =>
        video.id === id ? { ...video, ...videoData } : video
      )
    );
  };

  const deleteVideo = (id: string) => {
    setVideos((prev) => prev.filter((video) => video.id !== id));
  };

  return (
    <VideosContext.Provider
      value={{
        videos,
        addVideo,
        updateVideoStatus,
        incrementViews,
        editVideo,
        deleteVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

export function useVideos() {
  const context = useContext(VideosContext);
  if (context === undefined) {
    throw new Error('useVideos must be used within a VideosProvider');
  }
  return context;
}
