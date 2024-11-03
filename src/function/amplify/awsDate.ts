const toLocalDate = (isoString: string) => {
  const d = new Date(isoString);
  return d.toLocaleDateString('en-CA');
};

export {
  toLocalDate
};