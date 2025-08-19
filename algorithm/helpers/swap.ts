export function swap(arr: number[], index01: number, index02: number): number[] {
  const newArr = arr;
  const left = newArr[index01];
  const right = newArr[index02];
  if(typeof left !== "undefined" && typeof right !== "undefined") {
    newArr[index01] = right;
    newArr[index02] = left;
  }
  return newArr;
};
