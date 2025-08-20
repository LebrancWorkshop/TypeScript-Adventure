import { swap } from "../../helpers/swap";
import { ErrorLog } from "../../logs/error";

export function bubbleSort(data: number[]): number[] {
  for(let round = 0; round < data.length - 1; round++) {
    for(let pair = 0; pair < data.length - 1; pair++) {
      const left = data[pair];
      const right = data[pair + 1];
      if(typeof left !== "undefined" && typeof right !== "undefined") {
        if(left > right) {
          data = swap(data, pair, pair + 1);
        }
      } else {
        throw new Error(`[ERROR] ${ErrorLog.UNDEFINED_VALUE}`);
      }
    }
  }

  return data;
};
