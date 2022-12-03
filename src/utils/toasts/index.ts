import {toast} from 'react-toastify';

export const toastSuccess = (text: string) => toast.success(text);

export const toastError = (text: string) => toast.error(text);
