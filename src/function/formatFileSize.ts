export const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';

  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = bytes / Math.pow(1024, i);

  // Use toFixed(2) to keep two decimal places
  return `${size.toFixed(2)} ${sizes[i]}`;
};