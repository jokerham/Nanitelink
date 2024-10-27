import { toast } from 'react-toastify';

const showToast = (message: string, type: 'success' | 'warning' | 'error') => {
  toast(message, {
    type: type,
    position: 'top-right',
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: 'light'
  });
};

export { showToast };