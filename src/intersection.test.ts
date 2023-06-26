import { describe, expect, test } from "vitest";
import { arrayIntersection, intersection } from "./intersection";

describe("intersection", () => {
  test("intersection", () => {
    expect(intersection([1, 2], [3, 4])).toBeNull();
    expect(intersection([1, 2], [2, 3])).toBeNull();
    expect(intersection([1, 3], [2, 4])).toEqual([2, 3]);
  });

  test("arrayIntersection", () => {
    expect(
      arrayIntersection(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [2, 3],
          [4, 5],
        ]
      )
    ).toEqual([]);
    expect(
      arrayIntersection(
        [
          [1, 2],
          [3, 5],
        ],
        [
          [2, 3],
          [4, 6],
        ]
      )
    ).toEqual([[4, 5]]);
    expect(
      arrayIntersection(
        [
          [1, 4],
          [5, 8],
        ],
        [
          [2, 5],
          [6, 9],
        ],
        [
          [0, 3],
          [7, 10],
        ]
      )
    ).toEqual([
      [2, 3],
      [7, 8],
    ]);
    expect(arrayIntersection([[1, 2]], [[2, 3]])).toEqual([]);
  });
});
