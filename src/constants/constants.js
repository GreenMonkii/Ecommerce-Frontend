export function sumArray(arr) {
  if (arr.length > 0) {
    return arr.reduce((acc, currentValue) => acc + currentValue);
  } else {
    return 0;
  }
}

export const average = (arr) => Math.ceil(sumArray(arr) / arr.length);

export function range(end, start = 0, step = 1) {
  return Array.from(
    { length: Math.floor((end - start) / step) },
    (_, index) => start + index * step
  );
}
