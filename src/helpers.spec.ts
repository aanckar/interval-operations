import { sortByStart, sortByEnd, hasOverlap } from "./helpers";

describe("helpers", () => {
  test("sortByStart", () => {
    expect(sortByStart([0, 4], [1, 2])).toBe(-1);
    expect(sortByStart([2, 4], [1, 2])).toBe(1);
    expect(sortByStart([1, 3], [1, 2])).toBe(0);
  });

  test("sortByEnd", () => {
    expect(sortByEnd([0, 2], [1, 3])).toBe(-1);
    expect(sortByEnd([2, 3], [1, 2])).toBe(1);
    expect(sortByEnd([1, 3], [2, 3])).toBe(0);
  });

  test("hasOverlap", () => {
    expect(hasOverlap([0, 2], [3, 4])).toBe(false);
    expect(hasOverlap([0, 2], [2, 3])).toBe(false);
    expect(hasOverlap([0, 2], [1, 3])).toBe(true);
  });
});
