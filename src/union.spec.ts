import { union, arrayUnion } from "./union";

describe("union", () => {
  test("union", () => {
    expect(union()).toEqual([]);
    expect(union([1, 2], [3, 4])).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(union([1, 3], [2, 4], [5, 6])).toEqual([
      [1, 4],
      [5, 6],
    ]);
  });

  test("arrayUnion", () => {
    expect(arrayUnion()).toEqual([]);
    expect(
      arrayUnion(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [2, 3],
          [5, 7],
        ],
        [
          [0, 3],
          [6, 8],
        ]
      )
    ).toEqual([
      [0, 4],
      [5, 8],
    ]);
  });
});
