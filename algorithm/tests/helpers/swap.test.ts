import { describe, expect, it } from "bun:test";
import { swap } from "../../helpers/swap";


describe("Swap Function Testing.", () => {
  it("A: 1, B: 8 swap to A: 8, B: 1", () => {
    expect(swap([1, 8, 2], 1, 2)).toEqual([1, 2, 8]);
  })
});
