import { contains, arrayContains } from "./contains";

describe("contains", () => {
  test("contains", () => {
    expect(contains([1, 3], [2, 4])).toBe(false);
    expect(contains([1, 3], [2, 3])).toBe(true);
  });

  test("arrayContains", () => {
    expect(
      arrayContains(
        [
          [1, 3],
          [4, 5],
        ],
        [
          [1, 2],
          [2, 4],
        ]
      )
    ).toBe(false);
    expect(
      arrayContains(
        [
          [1, 3],
          [2, 4],
          [5, 6],
        ],
        [
          [1, 4],
          [5, 6],
        ]
      )
    ).toBe(true);
  });
});
