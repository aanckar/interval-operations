import { difference, arrayDifference } from './difference';

describe('difference', () => {
  test('difference', () => {
    expect(difference([2, 5], [2, 5])).toBeNull();
    expect(difference([2, 5], [0, 1])).toEqual([[2, 5]]);
    expect(difference([2, 5], [4, 6])).toEqual([[2, 4]]);
    expect(difference([2, 5], [1, 4])).toEqual([[4, 5]]);
    expect(difference([2, 5], [3, 4])).toEqual([[2, 3], [4, 5]]);
  });

  test('arrayDifference', () => {
    expect(arrayDifference([], [[1, 2]])).toEqual([]);
    expect(arrayDifference([[1, 2]], [])).toEqual([[1, 2]]);
    expect(arrayDifference([[2, 5]], [[5, 7]])).toEqual([[2, 5]]);
    expect(arrayDifference([[2, 5], [7, 10]], [[2, 6], [4, 11]])).toEqual([]);
    expect(
      arrayDifference(
        [[2, 7], [8, 13]],
        [[1, 3], [4, 5], [6, 9], [10, 11], [12, 14]]
      )
    ).toEqual([[3, 4], [5, 6], [9, 10], [11, 12]]);
  });
});
