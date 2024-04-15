export const binarySearch = (arr, userId) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid].id === userId) {
      return arr[mid];
    }
    if (arr[mid].id > userId) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return {};
};
