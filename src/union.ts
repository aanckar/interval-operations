import { Interval, IntervalPoint } from "./types";
import { sortByStart } from "./utils";

export function union<T extends IntervalPoint>(
  ...intervals: Interval<T>[]
): Interval<T>[] {
  intervals = intervals.sort(sortByStart);
  const result: Interval<T>[] = [];
  if (!intervals[0]) {
    return [];
  }
  let [start, end] = intervals[0];
  for (let i = 1, n = intervals.length; i < n; i++) {
    const curr = intervals[i];
    if (!curr) {
      continue;
    }
    const [nextStart, nextEnd] = curr;
    if (end < nextStart) {
      result.push([start, end]);
      start = nextStart;
    }
    if (end < nextEnd) {
      end = nextEnd;
    }
  }
  return [...result, [start, end]];
}

export function arrayUnion<T extends IntervalPoint>(
  ...arrays: Interval<T>[][]
): Interval<T>[] {
  if (!arrays.length) {
    return [];
  }
  let flattenedIntervals: Interval<T>[] = [];
  for (let i = 0, n = arrays.length; i < n; i++) {
    const curr = arrays[i];
    if (curr) {
      flattenedIntervals = flattenedIntervals.concat(curr);
    }
  }
  return union(...flattenedIntervals);
}
