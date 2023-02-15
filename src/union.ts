import { Interval } from "./types";
import { sortByStart } from "./helpers";

export function union(...intervals: Interval[]): Interval[] {
  if (!intervals.length) {
    return [];
  }
  intervals = intervals.sort(sortByStart);
  const result: Interval[] = [];
  let [start, end] = intervals[0] as Interval;
  for (let i = 1, n = intervals.length; i < n; i++) {
    const [nextStart, nextEnd] = intervals[i] as Interval;
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

export function arrayUnion(...arrays: Interval[][]): Interval[] {
  if (!arrays.length) {
    return [];
  }
  let flattenedIntervals: Interval[] = [];
  for (let i = 0, n = arrays.length; i < n; i++) {
    flattenedIntervals = flattenedIntervals.concat(arrays[i] as Interval[]);
  }
  return union(...flattenedIntervals);
}
