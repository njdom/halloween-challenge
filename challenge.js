export function maximaGanancia(arr) {
  const sumAllNumbers = (array) => array.reduce((acc, curr) => acc + curr, 0);
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  return Math.max(
    arr[arr.length - 1],
    maximaGanancia(arr.slice(1)),
    maximaGanancia(arr.slice(0, arr.length - 1)),
    sumAllNumbers(arr)
  );
}
