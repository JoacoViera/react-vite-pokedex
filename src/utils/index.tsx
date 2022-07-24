const capitalize = (word: string = "example") =>
  word.charAt(0).toUpperCase() + word.slice(1);

const range = (start: number = 0, stop: number = 0) =>
  Array.from({ length: stop - start }, (_, i) => start + i);

export { capitalize, range };
