import { describe, it, expect } from "bun:test";
import { bubbleSort } from "../../libs/sorting";

describe("Bubble Sort Algorithm Testings.", () => {
  it("Bubble Sort Testing ~ Case 01.", () => {
    let nums: number[] = [1, 2, 3, 4, 5];
    expect(bubbleSort(nums)).toEqual([1, 2, 3, 4, 5]);
  });

  it("Bubble Sort Testing ~ Case 02", () => {
    let nums: number[] = [99, 1, 8, 3, 26];
    expect(bubbleSort(nums)).toEqual([1, 3, 8, 26, 99]);
  });

  it("Bubble Sort Testing ~ Case 03", () => {
    let nums: number[] = [99, 98, 97, 96, 95];
    expect(bubbleSort(nums)).toEqual([95, 96, 97, 98, 99]);
  });
});
