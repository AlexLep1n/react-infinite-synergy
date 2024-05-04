export const recursiveBinarySearch = (arr, userId, start, end) => {
  let middle = Math.floor((start + end) / 2);
  if (Number(arr[middle].id) === Number(userId)) {
    return arr[middle];
  }
  if (Number(userId) > Number(arr[middle].id)) {
    return recursiveBinarySearch(arr, userId, middle + 1, end);
  } else {
    return recursiveBinarySearch(arr, userId, start, middle - 1);
  }
};
