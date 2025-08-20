import { swap } from "../../helpers/swap";
import { ErrorLog } from "../../logs/error";

export function selectionSort(data: number[]): number[] {
  for(let round = 0; round < data.length; round++) {
    let minimum = Infinity;
    for(let row = round; row < data.length; row++) {
      const current = data[row];
      if(typeof current !== "undefined") {
        if(current < minimum) {
          minimum = current;
        }
      } else {
        throw new Error(`[ERROR] ${ErrorLog.UNDEFINED_VALUE}`);
      }
    }
    data = swap(data, round, data.indexOf(minimum));
  }

  return data;
};
