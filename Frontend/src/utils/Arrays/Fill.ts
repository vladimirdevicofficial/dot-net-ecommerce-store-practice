export function Fill<T>(value: Array<T>, len: number) {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(value);
  }
  return arr;
}
