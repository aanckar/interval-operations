import { Interval, IntervalPoint } from "./types";
import { sortByEnd, sortByStart } from "./utils";

export function intersection<T extends IntervalPoint>(
  ...intervals: Interval<T>[]
): Interval<T> | null {
  intervals.sort(sortByStart);
  const start = intervals[intervals.length - 1]?.[0];
  const end = intervals.sort(sortByEnd)[0]?.[1];
  if (start === undefined || end === undefined) {
    return null;
  }
  for (let i = 0, n = intervals.length; i < n - 1; i++) {
    const next = intervals[i + 1];
    if (!next) {
      continue;
    }
    const [nextStart, nextEnd] = next;
    if (nextStart >= end || nextEnd <= start) {
      return null;
    }
  }
  return [start, end];
}

export function arrayIntersection<T extends IntervalPoint>(
  ...arrays: Interval<T>[][]
): Interval<T>[] {
  let result = arrays[0];
  for (let i = 1, n = arrays.length; i < n; i++) {
    const array = arrays[i];
    if (!array) {
      continue;
    }
    array.sort(sortByStart);
    const tempResult: Interval<T>[] = [];
    for (let j = 0, m = result?.length ?? 0; j < m; j++) {
      const curr = result?.[j];
      if (!curr) {
        continue;
      }
      for (let k = 0, l = array.length; k < l; k++) {
        const interval = array[k];
        if (!interval) {
          continue;
        }
        // skip intervals to the left
        if (interval[1] <= curr[0]) {
          continue;
        }
        // break if the rest of the intervals are to the right
        if (interval[0] >= curr[1]) {
          break;
        }
        const isect = intersection(curr, interval);
        if (isect) {
          tempResult.push(isect);
        }
      }
    }
    result = tempResult;
  }
  return result && result.length > 0 ? result : [];
}
