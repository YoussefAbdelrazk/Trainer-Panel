import { toast } from 'sonner';

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    style: {
      background: '#10B981',
      color: 'white',
      border: 'none',
    },
    duration: 3000,
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    style: {
      background: '#EF4444',
      color: 'white',
      border: 'none',
    },
    duration: 3000,
  });
};
