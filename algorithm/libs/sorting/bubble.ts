import { swap } from "../../helpers/swap";

export function bubbleSort(data: number[]): number[] {
  for(let round = 0; round < data.length - 1; round++) {
    for(let pair = 0; pair < data.length - 1; pair++) {
      const left = data[pair];
      const right = data[pair + 1];
      if(typeof left !== "undefined" && typeof right !== "undefined") {
        if(left > right) {
          data = swap(data, pair, pair + 1);
        }
      }
    }
  }

  return data;
};
