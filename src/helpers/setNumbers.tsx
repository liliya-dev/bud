export function setNumbers(n: number) {
  console.log('second num')
  const nums = [];
  let i = 0;
  while (i < n) {
    i++;
    nums.push(i)
  }
  return nums;
}