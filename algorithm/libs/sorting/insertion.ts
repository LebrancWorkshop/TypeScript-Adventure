import { ErrorLog } from "../../logs/error";

export function insertionSort(data: number[]): number[] {
  for(let row = 1; row < data.length; row++) {
    let cache = data[row];
    let previousCache = data[row - 1];
    if(typeof cache !== "undefined" && typeof previousCache !== "undefined") {
      if(cache < previousCache) {
        data[row] = previousCache;
        data[row - 1] = cache;
      }
    } else {
      throw new Error(`[ERROR] ${ErrorLog.UNDEFINED_VALUE}`);
    }
  }
  return data;
};
