import { describe, it, expect } from "bun:test";
import { bubbleSort, selectionSort } from "../libs/sorting";


describe("Sorting Algorithm Testings.", () => {
  it("Sort Testing ~ Case 01: Best Case.", () => {
    let nums: number[] = [1, 2, 3, 4, 5];
    let sortedNums: number[] = [1, 2, 3, 4, 5];
    expect(bubbleSort(nums)).toEqual(sortedNums); // Bubble Sort: 👍
    expect(selectionSort(nums)).toEqual(sortedNums); // Selection Sort: 👍
  });

  it("Sort Testing ~ Case 02: Average Case.", () => {
    let nums: number[] = [99, 1, 8, 3, 26];
    let sortedNums: number[] = [1, 3, 8, 26, 99];
    expect(bubbleSort(nums)).toEqual(sortedNums); // Bubble Sort: 👍
    expect(selectionSort(nums)).toEqual(sortedNums); // Selection Sort: 👍
  });

  it("Sort Testing ~ Case 03: Worst Case.", () => {
    let nums: number[] = [99, 98, 97, 96, 95];
    let sortedNums: number[] = [95, 96, 97, 98, 99];
    expect(bubbleSort(nums)).toEqual(sortedNums); // Bubble Sort: 👍
    expect(selectionSort(nums)).toEqual(sortedNums); // Selection Sort: 👍
  });
});
