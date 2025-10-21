export const dateFormatter = (date) => {
  return new Date(date)
    .toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    .toString();
};
