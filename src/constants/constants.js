export function sumArray(arr) {
  if (arr.length > 0) {
    return arr.reduce((acc, currentValue) => acc + currentValue);
  } else {
    return 0;
  }
}

export const average = (arr) => Math.round(sumArray(arr) / arr.length);

export function range(end, start = 0, step = 1) {
  return Array.from(
    { length: Math.floor((end - start) / step) },
    (_, index) => start + index * step
  );
}

export const Error404 = {
  title: "404 - PAGE NOT FOUND",
  message:
    "We're sorry, but the page you are looking for cannot be found. Please check the URL you entered or click the button below to go back to our homepage.",
};

export const ServerError = {
  title: "OOPS! SOMETHING BROKE.",
  message:
    "We're sorry, but the page you are looking for cannot be reached. Please refresh the page or click the button below to go back to our homepage.",
};
