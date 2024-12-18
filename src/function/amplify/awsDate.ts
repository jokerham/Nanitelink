export const toLocalDate = (isoString: string) => {
  const d = new Date(isoString);
  return d.toLocaleDateString('ko-KR');
};